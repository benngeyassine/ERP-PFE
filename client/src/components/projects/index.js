import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { ProjectListToolbar } from "./project-list-toolbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
function createData(REF, address, costumer, begindate, enddate, cost) {
  return {
    REF,
    address,
    costumer,
    begindate,
    enddate,
    cost,
    tasks: [
      {
        begindate: "2022-01-05",
        enddate: "2022-03-14",
        employers: "hani chikhawi",
        task: "installer les camera",
      },
      {
        begindate: "2022-04-02",
        enddate: "2022-06-17",
        employers: "mohamed haddad",
        task: "configurer les camera",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.REF}
        </TableCell>
        <TableCell align="right">{row.address}</TableCell>
        <TableCell align="right">{row.costumer}</TableCell>
        <TableCell align="right">{row.begindate}</TableCell>
        <TableCell align="right">{row.enddate}</TableCell>
        <TableCell align="right">{row.cost} dt</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Tasks
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Begin date</TableCell>
                    <TableCell>End date</TableCell>
                    <TableCell>employers</TableCell>
                    <TableCell>task</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.tasks.map((tasksRow) => (
                    <TableRow key={tasksRow.begindate}>
                      <TableCell component="th" scope="row">
                        {tasksRow.begindate}
                      </TableCell>
                      <TableCell>{tasksRow.enddate}</TableCell>
                      <TableCell align="right">{tasksRow.employers}</TableCell>
                      <TableCell align="right">{tasksRow.task}</TableCell>
                      <TableCell align="right">
                        <IconButton role="button" onClick={() => {}}>
                          <ModeEditRoundedIcon color="secondary" />
                        </IconButton>
                        <IconButton>
                          <DeleteForeverRoundedIcon color="error" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    address: PropTypes.number.isRequired,
    begindate: PropTypes.number.isRequired,
    costumer: PropTypes.number.isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        employers: PropTypes.number.isRequired,
        enddate: PropTypes.string.isRequired,
        begindate: PropTypes.string.isRequired,
      })
    ).isRequired,
    REF: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    enddate: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "PR005",
    "manouba",
    "amine zgoly",
    "2022-03-05",
    "2022-06-05",
    "1200"
  ),
  createData(
    "PR004",
    "nabeul",
    "amira dhifallah",
    "2022-01-05",
    "2022-05-05",
    "2300"
  ),
  createData(
    "PR003",
    "korba",
    "yousef kouki",
    "2021-12-05",
    "2022-02-05",
    "900"
  ),
  createData(
    "PR002",
    "gasren",
    "rania benali",
    "2021-10-05",
    "2022-12-05",
    "1800"
  ),
  createData(
    "PR001",
    "souse",
    "mossa belhadj",
    "2021-03-05",
    "2022-06-05",
    "1400"
  ),
];

const Projects = () => {
  /* 
THIS 
FIELD FOR 
BUTTON 


   */
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = useState();
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <ProjectListToolbar
          open={open}
          setOpen={setOpen}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <TableContainer component={Paper} style={{ marginTop: "100px" }}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>REF</TableCell>
                <TableCell align="right">ADRESS</TableCell>
                <TableCell align="right">COSTUMER</TableCell>
                <TableCell align="right">BEGIN DATE</TableCell>
                <TableCell align="right">END DATE</TableCell>
                <TableCell align="right">COST</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.REF} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};
export default Projects;
