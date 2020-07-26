import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button, CircularProgress, Grid, Typography } from "@material-ui/core";

export default function SubscribeForm() {
  return (
    <div style={{ padding: 30 }}>
      <Grid container spacing={1}>
        <Grid item md={12}>
          <Typography variant="h5" style={{color: "#00701a"}}>
            Subscribe for the latest posts.
          </Typography>
        </Grid>
        <Grid item md={12}>
            <Typography variant="subtitle1">
                No Spam. Unsubscribe at anytime.
            </Typography>
        </Grid>
        <Grid item md={12}>
          <Formik
            initialValues={{
              firstName: "",
              email: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                alert(JSON.stringify(values, null, 2));
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Grid container spacing={3}>
                  <Grid item md={5}>
                    <Field
                      component={TextField}
                      name="firstName"
                      label="First Name"
                      type="text"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={5}>
                    <Field
                      component={TextField}
                      name="email"
                      label="Email"
                      type="email"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={2}>
                    <Button type="submit" size="large" variant="contained">Submit</Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </div>
  );
}
