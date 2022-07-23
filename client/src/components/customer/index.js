import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "./customer-list-results";
import { CustomerListToolbar } from "./customer-list-toolbar";
//import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import axios from "axios";
import { costumers } from "../../actions/costumers";
import NotFound from "../404";
export default function Costumers() {
  const dispatch = useDispatch();
  const url = "http://localhost:5000/costumer";

  useEffect(() => {
    axios({
      method: "get",
      url: url,
      headers: {},
    })
      .then((res) => {
        console.log({ res });
        dispatch(costumers(res?.data));
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  const [open, setOpen] = React.useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState();
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
          <CustomerListToolbar
            open={open}
            setOpen={setOpen}
            selectedCustomer={selectedCustomer}
            setSelectedCustomer={setSelectedCustomer}
          />
          <Box sx={{ mt: 3 }}>
            <CustomerListResults
              open={open}
              setOpen={setOpen}
              selectedCustomer={selectedCustomer}
              setSelectedCustomer={setSelectedCustomer}
            />
          </Box>
        </Container>
      ) : (
        <NotFound />
      )}
    </Box>
  );
}
