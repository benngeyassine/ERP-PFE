import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
/* import axios from "axios";
import { useDispatch } from "react-redux";
import { updateProject } from "../../actions/products"; */

function EditProjectForm({ open, handleClose, selectedProject }) {
  const [value, setValue] = React.useState(selectedProject);
  const handleChange = (field, value) => {
    setValue((prevState) => {
      return {
        ...prevState,
        [field]: value,
      };
    });
  };
  /*   const dispatch = useDispatch(); */

  const submit = (values) => {
    /* const id = selectedProject?._id;
    const url = "http://localhost:5000/products";

    axios({
      method: "patch",
      url: `${url}/${id}`,
      headers: {},
      data: value,
    })
      .then((res) => {
        console.log({ res });
        dispatch(updateProject(res?.data));
        handleClose();
      })
      .catch((err) => {
        console.log({ err });
      }); */
    console.log(values);
  };
  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle>Update product</DialogTitle>
      <form>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <TextField
            label="REF"
            variant="outlined"
            style={{ marginBottom: "10px", width: "95%" }}
            name="REF"
            value={value?.REF}
            margin="dense"
            onChange={(el) => {
              const value = el.target.value;
              handleChange("REF", value);
            }}
          />
          <TextField
            label="Price"
            margin="dense"
            variant="outlined"
            name="price"
            value={value?.price}
            type="number"
            onChange={(el) => {
              const value = el.target.value;
              handleChange("price", value);
            }}
            style={{ marginBottom: "10px", width: "95%" }}
          />
          <TextField
            label="customer"
            variant="outlined"
            name="customer"
            value={value?.customer}
            margin="dense"
            onChange={(el) => {
              const value = el.target.value;
              handleChange("customer", value);
            }}
            style={{ marginBottom: "10px", width: "95%" }}
          />

          <TextField
            label="Begin_date"
            variant="outlined"
            margin="dense"
            name="Begin_date"
            value={value?.Begin_date}
            type="date"
            onChange={(el) => {
              const value = el.target.value;
              handleChange("Begin_date", value);
            }}
            style={{ marginBottom: "10px", width: "95%" }}
          />
          <TextField
            label="end_date"
            variant="outlined"
            margin="dense"
            name="end_date"
            value={value?.end_date}
            type="date"
            onChange={(el) => {
              const value = el.target.value;
              handleChange("end_date", value);
            }}
            style={{ marginBottom: "10px", width: "95%" }}
          />
        </div>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={submit}>
            UPDATE
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default EditProjectForm;
