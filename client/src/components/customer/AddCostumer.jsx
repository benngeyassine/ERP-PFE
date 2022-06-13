import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { createCostumer } from "../../actions/costumers";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";

const url = "http://localhost:5000/costumer";

const initialValues = {
  name: "",
  tel: "",
  email: "",
  addr: "",
  note: "",
};
let validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  tel: Yup.number().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  addr: Yup.string().required("Required"),
});
// axios({
//   method: "post",
//   url: url,
//   headers: {},
// })
//   .then((res) => {
//     console.log({ res });
//     dispatch(createCostumer(res?.data));
//   })
//   .catch((err) => {
//     console.log({ err });
//   });
const UserForm = ({ open, handleClose, selectedCustomer }) => {
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
        dispatch(createCostumer(res?.data));
        handleClose();
      })
      .catch((err) => {
        console.log({ err });
      });
    console.log(values);
  };
  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle>Create costumer</DialogTitle>
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
                  label="Name"
                  variant="outlined"
                  style={{ marginBottom: "10px", width: "95%" }}
                  name="name"
                  value={values.name}
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
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={values.email}
                  component={TextField}
                  style={{ marginBottom: "10px", width: "95%" }}
                />

                <Field
                  label="Address"
                  variant="outlined"
                  name="addr"
                  value={values.addr}
                  component={TextField}
                  style={{ marginBottom: "10px", width: "95%" }}
                />

                <Field
                  label="Note"
                  variant="outlined"
                  name="note"
                  value={values.note}
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
