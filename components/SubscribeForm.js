import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button, Grid, Typography } from "@material-ui/core";
import axios from "axios";

export default function SubscribeForm() {

  const [submitState, setSubmit] = React.useState(false)

  async function submit(values) {
    try {
      axios.post(
        "https://8120hwmwch.execute-api.us-east-1.amazonaws.com/subscribe",
        values
      )
      setSubmit(true)
    } catch(e){
      alert(e)
    }
  }
  return (
    <div style={{ padding: 30 }}>
      {submitState ? <div>
        <Typography variant="h3" align="center">
          Thanks For Subscribing!
        </Typography>
      </div> :
      <Grid container spacing={1}>
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
               submit(values)
                
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
                      inputProps={{ "aria-label": "first name" }}
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
      }
    </div>
  );
}
