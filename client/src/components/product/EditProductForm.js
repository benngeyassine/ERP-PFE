import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../actions/products";

function EditProductForm({ open, handleClose, selectedProduct }) {
  const [value, setValue] = React.useState(selectedProduct);
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
    const id = selectedProduct?._id;
    const url = "http://localhost:5000/products";

    axios({
      method: "patch",
      url: `${url}/${id}`,
      headers: {},
      data: value,
    })
      .then((res) => {
        console.log({ res });
        dispatch(updateProduct(res?.data));
        handleClose();
      })
      .catch((err) => {
        console.log({ err });
      });
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
            label="Amount"
            variant="outlined"
            margin="dense"
            name="amount"
            value={value?.amount}
            onChange={(el) => {
              const value = el.target.value;
              handleChange("amount", value);
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

export default EditProductForm;
