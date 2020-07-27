import React from "react";
import Navbar from "../components/Navbar";
import Copyright from "../src/Copyright";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Button,
} from "@material-ui/core";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    textAlign: "center",
  },
  media: {
    maxWidth: 500,
  },
  title: {
    paddingBottom: 25,
  },
  btn: {
    padding: 20,
  },
});

export default function projects() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Projects | David Groechel</title>
        <meta property="og:url" content="https://www.dgroechel.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="David Groechel" />
        <meta
          property="og:description"
          content="David Groechel - my collection of side projects I've worked on"
        />
        <link rel="shortcut icon" href="/DG.ico" />
      </Head>
      <Container maxWidth="md">
        <Navbar />
        <div className={classes.title}>
          <Typography variant="h4" component="h1" gutterBottom>
            Projects
          </Typography>
        </div>
        <Grid justify="center" alignItems="center" container spacing={2}>
          <Grid item md={6}>
            <Card className={classes.root}>
              <CardHeader title="Servoice.io" />{" "}
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Servoice.io is an all-all-on one estimate, invoice, and
                  payments platform for service businesses. Technologies Used
                  Include:
                </Typography>
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://aws.amazon.com/what-is-cloud-computing"
                >
                  <img
                    src="https://d0.awsstatic.com/logos/powered-by-aws.png"
                    alt="Powered by AWS Cloud Computing"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="node.js authors / Public domain"
                  href="https://commons.wikimedia.org/wiki/File:Node.js_logo.svg"
                >
                  <img
                    width="25%"
                    height="25%"
                    style={{
                      marginLeft: 69,
                      marginRight: "auto",
                    }}
                    alt="Node.js logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/512px-Node.js_logo.svg.png"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://serverless.com"
                >
                  <img
                    src="https://github.com/serverless/artwork/blob/master/logo-serverless-light.png?raw=true"
                    alt="Serverless Framework"
                    width="48%"
                    height="48%"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://sendgrid.com"
                >
                  <img
                    src="https://sendgrid.com/brand/sg-twilio/SG_Twilio_Lockup_RGBx1.png"
                    width="48%"
                    height="48%"
                    alt="Sendgrid"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://stripe.com"
                >
                  <img
                    src="/Stripe.png"
                    alt="Stripe"
                    width="48%"
                    height="48%"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook / Public domain"
                  href="https://commons.wikimedia.org/wiki/File:React-icon.svg"
                >
                  <img
                    width="25%"
                    height="25%"
                    style={{
                      marginLeft: 50,
                      marginRight: "auto",
                    }}
                    alt="React-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                  />
                </a>
              </CardContent>
              <div className={classes.btn}>
                <Button
                  variant="contained"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.servoice.io"
                >
                  Visit Project
                </Button>
              </div>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card className={classes.root}>
              <CardHeader title="LoveOnHHIsland.com" />{" "}
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Our Wedding Website. Technologies Used Include:
                </Typography>
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook / Public domain"
                  href="https://commons.wikimedia.org/wiki/File:React-icon.svg"
                >
                  <img
                    width="25%"
                    height="25%"
                    alt="React-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook / Public domain"
                  href="https://gatsbyjs.org"
                >
                  <img src="/Gatsby_Logo.png" width="54%" height="54%" />
                </a>
                <a
                  title="Facebook / BSD (http://opensource.org/licenses/bsd-license.php)"
                  href="https://graphql.org/"
                >
                  <img
                    width="40%"
                    height="40%"
                    alt="GraphQL Logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png"
                  />
                </a>
              </CardContent>
              <div className={classes.btn}>
                <Button
                  variant="contained"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://loveonhhisland.com"
                >
                  Visit Project
                </Button>
              </div>
            </Card>
          </Grid>
        </Grid>

        <Copyright />
      </Container>
    </div>
  );
}
