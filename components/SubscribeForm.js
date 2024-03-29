import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button, Grid, Typography } from "@material-ui/core";

export default function SubscribeForm() {
  const [sendForm, setSendForm] = React.useState(false);

  return (
    <div style={{ padding: 30 }}>
      {sendForm ? (
        <Typography variant="h3" align="center">
          Thanks for Your Submission!
        </Typography>
      ) : (
        <Grid
          container
          spacing={1}
          container
          justify="center"
          alignItems="center"
        >
          <Grid item md={12}>
            <Typography variant="h5" style={{ color: "#00701a" }}>
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
                  setSendForm(true);
                  setSubmitting(false);
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
                        inputProps={{ "aria-label": "First Name" }}
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
                        inputProps={{ "aria-label": "email" }}
                      />
                    </Grid>
                    <Grid item md={2}>
                      <Button type="submit" size="large" variant="contained">
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
