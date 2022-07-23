import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
/* import axios from "axios";
import { useDispatch } from "react-redux";
import { updateSales } from "../../actions/sales"; */

function EditSalesForm({ open, handleClose, selectedSales }) {
  const [value, setValue] = React.useState(selectedSales);
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
    /* const id = selectedSales?._id;
    const url = "http://localhost:5000/sales";

    axios({
      method: "patch",
      url: `${url}/${id}`,
      headers: {},
      data: value,
    })
      .then((res) => {
        console.log({ res });
        dispatch(updateSales(res?.data));
        handleClose();
      })
      .catch((err) => {
        console.log({ err });
      }); */
    console.log(values);
  };
  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle>Update sale invoice</DialogTitle>
      <form>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Ref"
            variant="outlined"
            name="ref"
            value={value?.ref}
            margin="dense"
            onChange={(el) => {
              const value = el.target.value;
              handleChange("ref", value);
            }}
            style={{ marginBottom: "10px", width: "95%" }}
          />

          <TextField
            label="date"
            variant="outlined"
            margin="dense"
            name="date"
            value={value?.date}
            type="date"
            onChange={(el) => {
              const value = el.target.value;
              handleChange("date", value);
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

export default EditSalesForm;
