import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { EmployerListResults } from "./employer-list-results";
import { EmployerListToolbar } from "./employer-list-toolbar";
//import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import axios from "axios";
import { employers } from "../../actions/employers";
import NotFound from "../404";
export default function Employers() {
  const dispatch = useDispatch();
  const url = "http://localhost:5000/employer";

  useEffect(() => {
    axios({
      method: "get",
      url: url,
      headers: {},
    })
      .then((res) => {
        console.log({ res });
        dispatch(employers(res?.data));
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  const [open, setOpen] = React.useState(false);
  const [selectedEmployer, setSelectedEmployer] = useState();
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
          <EmployerListToolbar
            open={open}
            setOpen={setOpen}
            selectedEmployer={selectedEmployer}
            setSelectedEmployer={setSelectedEmployer}
          />
          <Box sx={{ mt: 3 }}>
            <EmployerListResults
              open={open}
              setOpen={setOpen}
              selectedEmployer={selectedEmployer}
              setSelectedEmployer={setSelectedEmployer}
            />
          </Box>
        </Container>
      ) : (
        <NotFound />
      )}
    </Box>
  );
}
