import React, { useState } from "react";
import { createTheme } from '@material-ui/core/styles'
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { Box, Grid, Typography, Button, CircularProgress  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useRouter } from "next/router";
import Cookies from 'universal-cookie';

import { createUserWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase/firebaseInit";
import { stringify } from "@firebase/util";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  circularProgress: {
    marginRight: theme.spacing(1.5),
  },
}));

const RegisterForm = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const [alertMessage, setAlertMessage] = useState({ status: "", message: "" });
  const [showAlert, setShowAlert] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email wajib diisi!"),
    password: Yup.string().required("Password wajib diisi!"),
  });

  //FIREBASE
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleRegister = async ({ email, password }) => {

      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      .then((response) => {
        console.log(response);
        setAlertMessage({ status: "success", message: "Register berhasil!" });

        setTimeout(() => {
          router.push("/");
        }, 500);
      })
      .catch((error) => {
        setAlertMessage({
          status: "error",
          message: stringify(error),
        });
        console.log(error);
      });
    setShowAlert(true);
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h6">REGISTER</Typography>
        </Grid>
        <Grid item xs={12}>
          {showAlert && (
            <Box my={3}>
              <Alert severity={alertMessage.status}>
                {alertMessage.status === "success" ? (
                  <Box>
                    <AlertTitle>{alertMessage.message}</AlertTitle>
                    <Box display="flex" alignItems="center">
                      <CircularProgress
                        className={classes.circularProgress}
                        size={14}
                      />
                      <Typography variant="body2">
                        Tunggu sebentar, sedang diarahkan ke Dashboard
                      </Typography>
                    </Box>
                  </Box>
                ) : (
                  <Typography variant="body2">
                    {alertMessage.message}
                  </Typography>
                )}
              </Alert>
            </Box>
          )}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleRegister}
              >
                {({ submitForm, isSubmitting }) => (
                  <Form {...props}>
                    <Field
                      component={TextField}
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      margin="normal"
                      size="medium"
                      fullWidth
                    />

                    <Field
                      component={TextField}
                      name="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      margin="normal"
                      size="medium"
                      fullWidth
                    />

                    <Button
                      className={classes.submit}
                      color="primary"
                      type="submit"
                      variant="contained"
                      fullWidth={true}
                      disabled={isSubmitting}
                      onClick={submitForm}
                    >
                      <Typography variant="subtitle2">Register</Typography>
                    </Button>
                  </Form>
                )}
              </Formik>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterForm;