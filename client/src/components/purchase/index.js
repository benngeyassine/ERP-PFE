import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { PurchaseListToolbar } from "./putchase-list-toolbar";
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
function createData(name, address, costumer, begindate, enddate, price) {
  return {
    name,
    address,
    costumer,
    begindate,
    enddate,
    price,
    products: [
      {
        peace: "2020-01-05",
        price: 160,
        amount: 3,
      },
      {
        peace: "2020-01-02",
        price: 400,
        amount: 3,
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
          {row.name}
        </TableCell>
        <TableCell align="right">{row.address}</TableCell>
        <TableCell align="right">{row.costumer}</TableCell>
        <TableCell align="right">{row.begindate}</TableCell>
        <TableCell align="right">{row.enddate}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Products
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((productsRow) => (
                    <TableRow key={productsRow.begindate}>
                      <TableCell component="th" scope="row">
                        {productsRow.peace}
                      </TableCell>
                      <TableCell>{productsRow.price}</TableCell>
                      <TableCell align="right">{productsRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(productsRow.price * productsRow.amount)}
                      </TableCell>
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
    products: PropTypes.arrayOf(
      PropTypes.shape({
        employers: PropTypes.number.isRequired,
        enddate: PropTypes.string.isRequired,
        begindate: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    enddate: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("PI005", "2022-06-12", "hadi jllali", "21546852", "5"),
  createData("PI004", "2022-06-09", "othmane hamami", "98753951", "3"),
  createData("PI003", "2022-06-06", "seif zaraa", "55623874", "4"),
  createData("PI002", "2022-06-03", "tawfik belhady", "25654987", "2"),
  createData("PI001", "2022-06-02", "majdi hrayzy", "21586479", "5"),
];

const Purchase = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedPurchase, setSelectedPurchase] = useState();
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <PurchaseListToolbar
          open={open}
          setOpen={setOpen}
          selectedPurchase={selectedPurchase}
          setSelectedPurchase={setSelectedPurchase}
        />
        <TableContainer component={Paper} style={{ marginTop: "100px" }}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>REF</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Customer</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Note</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};
export default Purchase;
