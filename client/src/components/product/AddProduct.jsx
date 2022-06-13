import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { createProduct } from "../../actions/products";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";

const url = "http://localhost:5000/products";

const initialValues = {
  name: "",
  price: "",
  ref: "",
  amount: "",
};
let validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  ref: Yup.string().required("Required"),
  amount: Yup.number().required("Required"),
});

const UserForm = ({ open, handleClose, selectedProduct }) => {
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
        dispatch(createProduct(res?.data));
        handleClose();
      })
      .catch((err) => {
        console.log({ err });
      });
    console.log(values);
  };
  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle>Add Product</DialogTitle>
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
                  label="Price"
                  variant="outlined"
                  name="price"
                  value={values.price}
                  type="number"
                  component={TextField}
                  style={{ marginBottom: "10px", width: "95%" }}
                />
                <Field
                  label="ref"
                  variant="outlined"
                  name="ref"
                  value={values.ref}
                  component={TextField}
                  style={{ marginBottom: "10px", width: "95%" }}
                />

                <Field
                  label="amount"
                  variant="outlined"
                  name="amount"
                  value={values.amount}
                  type="number"
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
