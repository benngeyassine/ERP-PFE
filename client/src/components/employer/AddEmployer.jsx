import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { createEmployer } from "../../actions/employers";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";

const url = "http://localhost:5000/user";

const initialValues = {
  lastname: "",
  firstname: "",
  tel: "",
  addr: "",
  email: "",
  password: "",
  confirmpassword: "",
  type: "",
};
let validationSchema = Yup.object().shape({
  lastname: Yup.string().required("Required"),
  firstname: Yup.string().required("Required"),
  tel: Yup.number().required("Required"),
  addr: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  confirmpassword: Yup.string().required("Required"),
});
// axios({
//   method: "post",
//   url: url,
//   headers: {},
// })
//   .then((res) => {
//     console.log({ res });
//     dispatch(createEmployer(res?.data));
//   })
//   .catch((err) => {
//     console.log({ err });
//   });
const UserForm = ({ open, handleClose, selectedEmployer }) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    axios({
      method: "post",
      url: url,
      headers: {},
      data: values,
    })
      .then((res) => {
        console.log({ res });
        dispatch(createEmployer(res?.data));
        handleClose();
      })
      .catch((err) => {
        console.log({ err });
      });
    console.log(values);
  };
  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle>Create employer</DialogTitle>
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
                  label="First Name"
                  variant="outlined"
                  style={{ marginBottom: "10px", width: "95%" }}
                  name="firstname"
                  value={values.firstname}
                  component={TextField}
                />
                <Field
                  label="Last Name"
                  variant="outlined"
                  style={{ marginBottom: "10px", width: "95%" }}
                  name="lastname"
                  value={values.lastname}
                  component={TextField}
                />
                <Field
                  label="Phone number"
                  variant="outlined"
                  name="tel"
                  value={values.tel}
                  type="tel"
                  component={TextField}
                  style={{ marginBottom: "10px", width: "95%" }}
                />
                <Field
                  label="Address"
                  variant="outlined"
                  style={{ marginBottom: "10px", width: "95%" }}
                  name="addr"
                  value={values.addr}
                  component={TextField}
                />
                <Field
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={values.email}
                  component={TextField}
                  style={{ marginBottom: "10px", width: "95%" }}
                />

                <Field
                  label="Password"
                  variant="outlined"
                  name="password"
                  value={values.password}
                  component={TextField}
                  style={{ marginBottom: "10px", width: "95%" }}
                />

                <Field
                  label="Confirm Password"
                  variant="outlined"
                  name="confirmpassword"
                  value={values.confirmpassword}
                  style={{ marginBottom: "10px", width: "95%" }}
                  component={TextField}
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
