import React from "react";
import { deleteEmployer } from "../../actions/employers";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useDispatch } from "react-redux";

function DeleteEmployer({ id, employer }) {
  const url = "http://localhost:5000/user";
  const dispatch = useDispatch();

  function handelDelete() {
    axios({
      method: "delete",
      url: `${url}/${id}`,
      headers: {},
    })
      .then(() => {
        dispatch(deleteEmployer(employer));
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

export default DeleteEmployer;
