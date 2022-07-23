import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";

import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteCostumer from "./DeleteCostumer";
import { getInitials } from "./get-initials";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import { useSelector } from "react-redux";

export const CustomerListResults = ({
  open,
  setOpen,
  selectedCustomer,
  setSelectedCustomer,
  // customers,
  ...rest
}) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const customers = useSelector((state) => state?.costumerReducers?.costumers);
  console.log({ customers });
  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers?.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds?.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds?.length === customers?.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds?.length > 0 &&
                      selectedCustomerIds?.length < customers?.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>

                <TableCell>Phone</TableCell>
                <TableCell>Adresse</TableCell>

                <TableCell>Note</TableCell>
                <TableCell>Registration date</TableCell>

                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers?.length > 0 &&
                customers?.slice(0, limit)?.map((customer) => (
                  <TableRow
                    hover
                    key={customer.id}
                    selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={
                          selectedCustomerIds.indexOf(customer.id) !== -1
                        }
                        onChange={(event) =>
                          handleSelectOne(event, customer.id)
                        }
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <Avatar
                          src="https://cdn-icons.flaticon.com/png/128/1224/premium/1224849.png?token=exp=1655050334~hmac=167f5f9b7e27e67c0f710a204bec6731"
                          sx={{ mr: 2 }}
                        >
                          {getInitials(customer.name)}
                        </Avatar>
                        <Typography color="textPrimary" variant="body1">
                          {customer.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.tel}</TableCell>
                    <TableCell>{customer.addr}</TableCell>

                    <TableCell>{customer.note}</TableCell>

                    <TableCell>
                      {format(new Date(customer.createdAt), "dd/MM/yyyy")}
                    </TableCell>
                    <TableCell
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        width: "0%",
                      }}
                    >
                      <IconButton
                        role="button"
                        onClick={() => {
                          console.log({ customer });
                          setSelectedCustomer(customer);
                          setOpen(true);
                        }}
                      >
                        <ModeEditRoundedIcon color="secondary" />
                      </IconButton>
                      <DeleteCostumer customer={customer} id={customer._id} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers?.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired,
};
