import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { createPurchase } from "../../actions/purchase";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
/* import FileBase from "react-file-base64"; */

const url = "http://localhost:5000/purchase";

const initialValues = {
  REF: "",
  date: "",
};
let validationSchema = Yup.object().shape({
  REF: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
});
const profile = localStorage.getItem("profile");
const UserForm = ({ open, handleClose, selectedPurchase }) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    axios({
      method: "post",
      url: url,
      headers: { userid: JSON.parse(profile)?._id },
      data: values,
    })
      .then((res) => {
        console.log({ res });
        dispatch(createPurchase(res?.data));
        handleClose();
      })
      .catch((err) => {
        console.log({ err });
      });
    console.log(values);
  };
  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle>Add Project</DialogTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ dirty, isValid, values, handleChange, handleBlur }) => {
          return (
            <Form>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Field
                  label="REF"
                  variant="outlined"
                  style={{ marginBottom: "10px", width: "95%" }}
                  name="REF"
                  value={values.REF}
                  component={TextField}
                />
                <Field
                  label="REF"
                  variant="outlined"
                  style={{ marginBottom: "10px", width: "95%" }}
                  name="REF"
                  value={values.REF}
                  component={TextField}
                />
                <Field
                  label="date"
                  variant="outlined"
                  name="date"
                  value={values.date}
                  type="date"
                  component={TextField}
                  style={{ marginBottom: "10px", width: "95%" }}
                />
              </div>
              <DialogActions>
                <Button
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  disabled={!dirty || !isValid}
                  variant="contained"
                  color="primary"
                  type="Submit"
                >
                  CREATE
                </Button>
              </DialogActions>
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default UserForm;
