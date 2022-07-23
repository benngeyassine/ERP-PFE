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
import EditSalesForm from "./EditSalesForm";
import AddSales from "./AddSales";
export const SalesListToolbar = (props) => {
  const { open, setOpen, selectedSales, setSelectedSales } = props;

  const handleClickOpen = () => {
    setOpen(true);
    setSelectedSales(null);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box {...props}>
      {selectedSales ? (
        <EditSalesForm
          selectedSales={selectedSales}
          handleClose={handleClose}
          open={open}
        />
      ) : (
        <AddSales
          selectedSales={selectedSales}
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
          Sales
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button onClick={handleClickOpen} color="primary" variant="contained">
            Create Sale Invoice
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
                placeholder="Search purchase"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
