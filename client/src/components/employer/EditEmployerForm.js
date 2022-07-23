import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateEmployer } from "../../actions/employers";

function EditEmployerForm({ open, handleClose, selectedEmployer }) {
  const [value, setValue] = React.useState(selectedEmployer);
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
    const id = selectedEmployer?._id;
    const url = "http://localhost:5000/user";

    axios({
      method: "patch",
      url: `${url}/${id}`,
      headers: {},
      data: value,
    })
      .then((res) => {
        console.log({ res });
        dispatch(updateEmployer(res?.data));
        handleClose();
      })
      .catch((err) => {
        console.log({ err });
      });
  };
  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle>Update employer</DialogTitle>
      <form>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Last Name"
            variant="outlined"
            style={{ marginBottom: "10px", width: "95%" }}
            name="lastname"
            value={value?.lastname}
            margin="dense"
            onChange={(el) => {
              const value = el.target.value;
              handleChange("lastname", value);
            }}
          />
          <TextField
            label="First Name"
            variant="outlined"
            style={{ marginBottom: "10px", width: "95%" }}
            name="firstname"
            value={value?.firstname}
            margin="dense"
            onChange={(el) => {
              const value = el.target.value;
              handleChange("firstname", value);
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
            label="Address"
            variant="outlined"
            style={{ marginBottom: "10px", width: "95%" }}
            name="addr"
            value={value?.addr}
            margin="dense"
            onChange={(el) => {
              const value = el.target.value;
              handleChange("addr", value);
            }}
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
            label="Password"
            variant="outlined"
            margin="dense"
            name="password"
            value={value?.password}
            onChange={(el) => {
              const value = el.target.value;
              handleChange("password", value);
            }}
            style={{ marginBottom: "10px", width: "95%" }}
          />

          <TextField
            label="Confirm Password"
            variant="outlined"
            name="confirmpassword"
            margin="dense"
            value={value?.confirmpassword}
            onChange={(el) => {
              const value = el.target.value;
              handleChange("confirmpassword", value);
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

export default EditEmployerForm;
