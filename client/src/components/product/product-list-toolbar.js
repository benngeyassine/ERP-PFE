import React from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Search as SearchIcon } from "../icons/search";
import EditProductForm from "./EditProductForm";
import AddProduct from "./AddProduct";
export const ProductListToolbar = (props) => {
  const { open, setOpen, selectedProduct, setSelectedProduct } = props;

  const handleClickOpen = () => {
    setOpen(true);
    setSelectedProduct(null);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box {...props}>
      {selectedProduct ? (
        <EditProductForm
          selectedProduct={selectedProduct}
          handleClose={handleClose}
          open={open}
        />
      ) : (
        <AddProduct
          selectedProduct={selectedProduct}
          handleClose={handleClose}
          open={open}
        />
      )}

      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Typography
          sx={{
            m: 1,
            backgroundColor: "#fff",
            padding: "5px",
            borderRadius: "7px",
          }}
          variant="h4"
        >
          Products
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button onClick={handleClickOpen} color="primary" variant="contained">
            Add Products
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon color="action" fontSize="small">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search product"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
