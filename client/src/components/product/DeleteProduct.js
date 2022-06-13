import React from "react";
import { deleteProduct } from "../../actions/products";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useDispatch } from "react-redux";

function DeleteProduct({ id, product }) {
  const url = "http://localhost:5000/products";
  const dispatch = useDispatch();

  function handelDelete() {
    axios({
      method: "delete",
      url: `${url}/${id}`,
      headers: {},
    })
      .then(() => {
        dispatch(deleteProduct(product));
      })
      .catch((err) => {
        console.log({ err });
      });
  }
  return (
    <IconButton onClick={handelDelete}>
      <DeleteForeverRoundedIcon />
    </IconButton>
  );
}

export default DeleteProduct;
