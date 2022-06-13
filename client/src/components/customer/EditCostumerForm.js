import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateCostumer } from "../../actions/costumers";

function EditCostumerForm({ open, handleClose, selectedCustomer }) {
  const [value, setValue] = React.useState(selectedCustomer);
  const handleChange = (field, value) => {
    setValue((prevState) => {
      return {
        ...prevState,
        [field]: value,
      };
    });
  };
  const dispatch = useDispatch();

  const submit = () => {
    const id = selectedCustomer?._id;
    const url = "http://localhost:5000/costumer";

    axios({
      method: "patch",
      url: `${url}/${id}`,
      headers: {},
      data: value,
    })
      .then((res) => {
        console.log({ res });
        dispatch(updateCostumer(res?.data));
        handleClose();
      })
      .catch((err) => {
        console.log({ err });
      });
  };
  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle>Update costumer</DialogTitle>
      <form>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            style={{ marginBottom: "10px", width: "95%" }}
            name="name"
            value={value?.name}
            margin="dense"
            onChange={(el) => {
              const value = el.target.value;
              handleChange("name", value);
            }}
          />
          <TextField
            label="Phone number"
            margin="dense"
            variant="outlined"
            name="tel"
            value={value?.tel}
            type="tel"
            onChange={(el) => {
              const value = el.target.value;
              handleChange("tel", value);
            }}
            style={{ marginBottom: "10px", width: "95%" }}
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={value?.email}
            margin="dense"
            onChange={(el) => {
              const value = el.target.value;
              handleChange("email", value);
            }}
            style={{ marginBottom: "10px", width: "95%" }}
          />

          <TextField
            label="Address"
            variant="outlined"
            margin="dense"
            name="addr"
            value={value?.addr}
            onChange={(el) => {
              const value = el.target.value;
              handleChange("addr", value);
            }}
            style={{ marginBottom: "10px", width: "95%" }}
          />

          <TextField
            label="Note"
            variant="outlined"
            name="note"
            margin="dense"
            value={value?.note}
            onChange={(el) => {
              const value = el.target.value;
              handleChange("note", value);
            }}
            style={{ marginBottom: "10px", width: "95%" }}
          />
        </div>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={submit}>
            Update
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default EditCostumerForm;
