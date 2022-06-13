import React from "react";
import { deleteCostumer } from "../../actions/costumers";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useDispatch } from "react-redux";

function DeleteCostumer({ id, customer }) {
  const url = "http://localhost:5000/costumer";
  const dispatch = useDispatch();

  function handelDelete() {
    axios({
      method: "delete",
      url: `${url}/${id}`,
      headers: {},
    })
      .then(() => {
        dispatch(deleteCostumer(customer));
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

export default DeleteCostumer;
