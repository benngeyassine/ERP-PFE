import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
/* import axios from "axios";
import { createProject } from "../../actions/products";
import { useDispatch } from "react-redux"; */
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
/* import FileBase from "react-file-base64"; */

/* const url = "http://localhost:5000/products"; */

const initialValues = {
  REF: "",
  price: "",
  customer: "",
  Begin_date: "",
  end_date: "",
};
let validationSchema = Yup.object().shape({
  REF: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  customer: Yup.string().required("Required"),
  begin_date: Yup.string().required("Required"),
  end_date: Yup.string().required("Required"),
});

const UserForm = ({ open, handleClose, selectedProject }) => {
  /* const dispatch = useDispatch(); */

  const onSubmit = (values) => {
    /*  axios({
      method: "post",
      url: url,
      headers: {},
      data: values,
    })
      .then((res) => {
        console.log({ res });
        dispatch(createProject(res?.data));
        handleClose();
      })
      .catch((err) => {
        console.log({ err });
      }); */
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
                  label="Price"
                  variant="outlined"
                  name="price"
                  value={values.price}
                  type="number"
                  component={TextField}
                  style={{ marginBottom: "10px", width: "95%" }}
                />
                <Field
                  label="customer"
                  variant="outlined"
                  name="customer"
                  value={values.customer}
                  component={TextField}
                  style={{ marginBottom: "10px", width: "95%" }}
                />

                <Field
                  label="Begin_date"
                  variant="outlined"
                  name="Begin_date"
                  value={values.Begin_date}
                  type="date"
                  component={TextField}
                  style={{ marginBottom: "10px", width: "95%" }}
                />
                <Field
                  label="end_date"
                  variant="outlined"
                  name="end_date"
                  value={values.end_date}
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
