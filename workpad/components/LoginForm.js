import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { Box, Grid, Typography, Button, CircularProgress  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useRouter } from "next/router";
import Cookies from 'universal-cookie';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  circularProgress: {
    marginRight: theme.spacing(1.5),
  },
}));

const LoginForm = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const [alertMessage, setAlertMessage] = useState({ status: "", message: "" });
  const [showAlert, setShowAlert] = useState(false);
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username wajib diisi!"),
    password: Yup.string().required("Password wajib diisi!"),
  });

  const handleLogin = async ({ username, password }, { setSubmitting }) => {
    await axios
      .post(process.env.NEXT_PUBLIC_BACKEND_URL + "/login", {
        username,
        password,
      })
      .then((response) => {
        const cookies = new Cookies();
        const { content } = response.data
        let isManager = false
        let token = null
        let user = null
        if (content?.token) {
          // untuk manager
          isManager = true;
          token = content.token
        }
        else {
          // untuk employee
          token = content.data.Token
          user = content.data
          localStorage.setItem("user", JSON.stringify(user));
          cookies.set('user', user, {path: '/'})
        }
        
        // simpan data ke localstorage dan cookies
        setAlertMessage({ status: "success", message: "Login berhasil!" });
        localStorage.setItem("token", token);
        cookies.set('auth-token', token, {path: '/'})

        setTimeout(() => {
          if (isManager) router.push("/manager")
          else {
            router.push("/dashboard");
          }
        }, 500);
      })
      .catch((error) => {
        setAlertMessage({
          status: "error",
          message: "Pengguna tidak ditemukan!",
        });
        console.log(error);
      });
    setShowAlert(true);
    setSubmitting(false);
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
        <Grid item xs={15}>
          <img src="./workpad.png" alt="Logo Workpad" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Website Managerial Perusahaan</Typography>
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
                onSubmit={handleLogin}
              >
                {({ submitForm, isSubmitting }) => (
                  <Form {...props}>
                    <Field
                      component={TextField}
                      name="username"
                      label="Username"
                      type="text"
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
                      <Typography variant="subtitle2">Login</Typography>
                    </Button>
                  </Form>
                )}
              </Formik>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginForm;