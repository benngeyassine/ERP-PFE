import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { ProductListResults } from "./product-list-results";
import { ProductListToolbar } from "./product-list-toolbar";
//import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import axios from "axios";
import { products } from "../../actions/products";
import NotFound from "../404";
export default function Products() {
  const dispatch = useDispatch();
  const url = "http://localhost:5000/products";

  useEffect(() => {
    axios({
      method: "get",
      url: url,
      headers: {},
    })
      .then((res) => {
        //console.log({ res });
        dispatch(products(res?.data));
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [dispatch]);

  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  let test = true;

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      {test ? (
        <Container maxWidth={false}>
          <ProductListToolbar
            open={open}
            setOpen={setOpen}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
          <Box sx={{ mt: 3 }}>
            <ProductListResults
              open={open}
              setOpen={setOpen}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          </Box>
        </Container>
      ) : (
        <NotFound />
      )}
    </Box>
  );
}
