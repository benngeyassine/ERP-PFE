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
import DeleteProduct from "./DeleteProduct";
//import { getInitials } from "./get-initials";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useSelector } from "react-redux";

export const ProductListResults = ({
  open,
  setOpen, //
  selectedProduct,
  setSelectedProduct,
  // products,
  ...rest
}) => {
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const products = useSelector((state) => state?.productReducers?.products);
  console.log({ products });
  const handleSelectAll = (event) => {
    let newSelectedProductIds;

    if (event.target.checked) {
      newSelectedProductIds = products?.map((product) => product.id);
    } else {
      newSelectedProductIds = [];
    }

    setSelectedProductIds(newSelectedProductIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedProductIds.indexOf(id);
    let newSelectedProductIds = [];

    if (selectedIndex === -1) {
      newSelectedProductIds = newSelectedProductIds.concat(
        selectedProductIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedProductIds = newSelectedProductIds.concat(
        selectedProductIds.slice(1)
      );
    } else if (selectedIndex === selectedProductIds?.length - 1) {
      newSelectedProductIds = newSelectedProductIds.concat(
        selectedProductIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedProductIds = newSelectedProductIds.concat(
        selectedProductIds.slice(0, selectedIndex),
        selectedProductIds.slice(selectedIndex + 1)
      );
    }

    setSelectedProductIds(newSelectedProductIds);
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
                    checked={selectedProductIds?.length === products?.length}
                    color="primary"
                    indeterminate={
                      selectedProductIds?.length > 0 &&
                      selectedProductIds?.length < products?.length
                    }
                    //   onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>

                <TableCell>Ref</TableCell>
                <TableCell>Amount</TableCell>

                <TableCell>Registration date</TableCell>

                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.length > 0 &&
                products?.slice(0, limit)?.map((product) => (
                  // console.log({{product}});
                  <TableRow
                    hover
                    key={product.id}
                    selected={selectedProductIds.indexOf(product.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedProductIds.indexOf(product.id) !== -1}
                        onChange={(event) => handleSelectOne(event, product.id)}
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
                        <Typography color="textPrimary" variant="body1">
                          {product.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.ref}</TableCell>

                    <TableCell>{product.amount}</TableCell>

                    <TableCell>
                      {format(new Date(product.createdAt), "dd/MM/yyyy")}
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
                          console.log({ product });
                          setSelectedProduct(product);
                          setOpen(true);
                        }}
                      >
                        <ModeEditIcon />
                      </IconButton>
                      <DeleteProduct product={product} id={product._id} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={products?.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ProductListResults.propTypes = {
  products: PropTypes.array.isRequired,
};
