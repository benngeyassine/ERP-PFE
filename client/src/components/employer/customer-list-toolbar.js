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
import EditCostumerForm from "./EditCostumerForm";
import AddCostumer from "./AddCostumer";
export const CustomerListToolbar = (props) => {
  const { open, setOpen, selectedCustomer, setSelectedCustomer } = props;

  const handleClickOpen = () => {
    setOpen(true);
    setSelectedCustomer(null);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box {...props}>
      {selectedCustomer ? (
        <EditCostumerForm
          selectedCustomer={selectedCustomer}
          handleClose={handleClose}
          open={open}
        />
      ) : (
        <AddCostumer
          selectedCustomer={selectedCustomer}
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
          Customers
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button onClick={handleClickOpen} color="primary" variant="contained">
            Add Customers
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
                placeholder="Search customer"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
