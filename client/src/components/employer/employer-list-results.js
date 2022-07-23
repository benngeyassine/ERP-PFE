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
import DeleteEmployer from "./DeleteEmployer";
import { getInitials } from "./get-initials";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useSelector } from "react-redux";

export const EmployerListResults = ({
  open,
  setOpen,
  selectedEmployer,
  setSelectedEmployer,
  // employers,
  ...rest
}) => {
  const [selectedEmployerIds, setSelectedEmployerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const employers = useSelector((state) => state?.employerReducers?.employers);
  console.log({ employers });
  const handleSelectAll = (event) => {
    let newSelectedEmployerIds;

    if (event.target.checked) {
      newSelectedEmployerIds = employers?.map((employer) => employer.id);
    } else {
      newSelectedEmployerIds = [];
    }

    setSelectedEmployerIds(newSelectedEmployerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedEmployerIds.indexOf(id);
    let newSelectedEmployerIds = [];

    if (selectedIndex === -1) {
      newSelectedEmployerIds = newSelectedEmployerIds.concat(
        selectedEmployerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedEmployerIds = newSelectedEmployerIds.concat(
        selectedEmployerIds.slice(1)
      );
    } else if (selectedIndex === selectedEmployerIds?.length - 1) {
      newSelectedEmployerIds = newSelectedEmployerIds.concat(
        selectedEmployerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedEmployerIds = newSelectedEmployerIds.concat(
        selectedEmployerIds.slice(0, selectedIndex),
        selectedEmployerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedEmployerIds(newSelectedEmployerIds);
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
                    checked={selectedEmployerIds?.length === employers?.length}
                    color="primary"
                    indeterminate={
                      selectedEmployerIds?.length > 0 &&
                      selectedEmployerIds?.length < employers?.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Phone</TableCell>

                <TableCell>Adresse</TableCell>
                <TableCell>Email</TableCell>

                <TableCell>Type</TableCell>
                <TableCell>Created At</TableCell>

                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employers?.length > 0 &&
                employers?.slice(0, limit)?.map((employer) => (
                  <TableRow
                    hover
                    key={employer.id}
                    selected={selectedEmployerIds.indexOf(employer.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={
                          selectedEmployerIds.indexOf(employer.id) !== -1
                        }
                        onChange={(event) =>
                          handleSelectOne(event, employer.id)
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
                          {getInitials(employer.name)}
                        </Avatar>
                        <Typography color="textPrimary" variant="body1">
                          {employer.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{employer.tel}</TableCell>
                    <TableCell>{employer.addr}</TableCell>

                    <TableCell>{employer.email}</TableCell>

                    <TableCell>{employer.type}</TableCell>

                    <TableCell>
                      {format(new Date(employer.createdAt), "dd/MM/yyyy")}
                    </TableCell>
                    <TableCell
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <IconButton
                        role="button"
                        onClick={() => {
                          console.log({ employer });
                          setSelectedEmployer(employer);
                          setOpen(true);
                        }}
                      >
                        <ModeEditIcon />
                      </IconButton>
                      <DeleteEmployer employer={employer} id={employer._id} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={employers?.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

EmployerListResults.propTypes = {
  employers: PropTypes.array.isRequired,
};
