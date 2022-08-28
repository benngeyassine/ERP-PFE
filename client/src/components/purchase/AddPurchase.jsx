import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { createPurchase } from "../../actions/purchase";
import { useDispatch } from "react-redux";
import { FieldArray, Formik, Form, Field, getIn } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
/* import FileBase from "react-file-base64"; */

const url = "http://localhost:5000/purchase";

const initialValues = {
  REF: "",
  date: "",
  products: [
    {
      name: "",
      price: "",
      amount: "",
    },
  ],
};
let validationSchema = Yup.object().shape({
  REF: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
  products: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      amount: Yup.number().required("Required"),
    })
  ),
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
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    button: {
      margin: theme.spacing(1),
    },
    field: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle>Create Purchace Invoice</DialogTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          dirty,
          touched,
          errors,
          isValid,
          values,
          handleChange,
          handleBlur,
        }) => {
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
                  label="date"
                  variant="outlined"
                  name="date"
                  value={values.date}
                  type="date"
                  component={TextField}
                  style={{ marginBottom: "10px", width: "95%" }}
                />
                <div>
                  <FieldArray name="products">
                    {({ push, remove }) => (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "center",
                        }}
                      >
                        {values.products.map((p, index) => {
                          const name = `products[${index}].name`;
                          const touchedname = getIn(touched, name);
                          const errorname = getIn(errors, name);

                          const price = `products[${index}].price`;
                          const touchedprice = getIn(touched, price);
                          const errorprice = getIn(errors, price);

                          const amount = `products[${index}].amount`;
                          const touchedamount = getIn(touched, amount);
                          const erroramount = getIn(errors, amount);
                          return (
                            <div key={p.id}>
                              <Field
                                componet={TextField}
                                className={classes.field}
                                variant="outlined"
                                label="name"
                                name={name}
                                style={{ marginBottom: "10px", width: "95%" }}
                                value={p.name}
                                required
                                helperText={
                                  touchedname && errorname ? errorname : ""
                                }
                                error={Boolean(touchedname && errorname)}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <Field
                                componet={TextField}
                                className={classes.field}
                                margin="normal"
                                variant="outlined"
                                label="Price"
                                name={price}
                                value={p.price}
                                required
                                style={{ marginBottom: "10px", width: "95%" }}
                                helperText={
                                  touchedprice && errorprice ? errorprice : ""
                                }
                                error={Boolean(touchedprice && errorprice)}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <Field
                                componet={TextField}
                                className={classes.field}
                                margin="normal"
                                variant="outlined"
                                label="Amount"
                                name={amount}
                                style={{ marginBottom: "10px", width: "95%" }}
                                value={p.amount}
                                required
                                helperText={
                                  touchedamount && erroramount
                                    ? erroramount
                                    : ""
                                }
                                error={Boolean(touchedamount && erroramount)}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <Button
                                className={classes.button}
                                margin="normal"
                                type="button"
                                color="secondary"
                                variant="outlined"
                                onClick={() => remove(index)}
                              >
                                x
                              </Button>
                            </div>
                          );
                        })}
                        <Button
                          className={classes.button}
                          type="button"
                          variant="outlined"
                          onClick={() =>
                            push({
                              name: "",
                              price: "",
                              amount: "",
                            })
                          }
                        >
                          Add Product
                        </Button>
                      </div>
                    )}
                  </FieldArray>
                </div>
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
