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
import EditEmployerForm from "./EditEmployerForm";
import AddEmployer from "./AddEmployer";
export const EmployerListToolbar = (props) => {
  const { open, setOpen, selectedEmployer, setSelectedEmployer } = props;

  const handleClickOpen = () => {
    setOpen(true);
    setSelectedEmployer(null);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box {...props}>
      {selectedEmployer ? (
        <EditEmployerForm
          selectedEmployer={selectedEmployer}
          handleClose={handleClose}
          open={open}
        />
      ) : (
        <AddEmployer
          selectedEmployer={selectedEmployer}
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
          Employers
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button onClick={handleClickOpen} color="primary" variant="contained">
            Add Employer
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
                placeholder="Search employer"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
