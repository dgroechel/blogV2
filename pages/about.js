import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Copyright from "../src/Copyright";
import Navbar from "../components/Navbar";
import Head from "next/head";
import SubscribeForm from "../components/SubscribeForm";
import { Grid } from "@material-ui/core";

export default function About() {
  return (
    <>
      <Head>
        <title>About | David Groechel</title>
        <meta property="og:url" content="https://www.dgroechel.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="David Groechel" />
        <meta
          property="og:description"
          content="About David Groechel - Multi hat wearer originally from Detroit. I love all things tech, marketing, and user experience"
        />
        <link rel="shortcut icon" href="/DG.ico" />
      </Head>

      <Container maxWidth="md">
        <Navbar />

        <Typography variant="h4" component="h1" gutterBottom>
          David Groechel
        </Typography>
        <Typography variant="h4" color="secondary">
          A multi-hat wearer proud to be from Detroit
        </Typography>
        <div style={{ textAlign: "center", padding: 15 }}>
          <img
            src="/dgreshHeadshot.jpg"
            alt="David Groechel Headshot"
            width="99%"
            height="99%"
          />
        </div>
        <Typography>
          Originally from Detroit, I graduated from Michigan State in 2014 and
          worked in the mortgage industry for 3 years. After those 3 years, I
          decided it was time to pursue my dreams and open a bar in Chicago. The
          bar didn't pan out and I ended up moving to Boston to be closer to my
          now fiancé Reneé. It was one of the best decisions I've made. After a
          long, weird journey, I luckily found myself at HubSpot where I still
          am today! I am passionate about user experience and you can usually
          find me combing through data to find ways to increase our users'
          satisfaction.
        </Typography>
        <br />
        <Typography>
          In my spare time, you can find me relaxing on the beach listening to
          Kygo, coding side projects, playing with new tech/software, or
          lounging with our cat, Wilson.
        </Typography>

        <br />
        <Typography variant="h4" component="h1" gutterBottom>
          Technologies Used For This Blog:
        </Typography>

        <Grid container justify="center" alignItems="center" >
          <Grid item md={6}>
            <a
              title="ZEIT / CC BY-SA (https://creativecommons.org/licenses/by-sa/4.0)"
              href="https://commons.wikimedia.org/wiki/File:Nextjs-logo.svg"
            >
              <img
                alt="Nextjs-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/128px-Nextjs-logo.svg.png"
              />
            </a>
          </Grid>
          <Grid item md={6}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook / Public domain"
              href="https://commons.wikimedia.org/wiki/File:React-icon.svg"
            >
              <img
                width="45%"
                height="45%"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%"
                }}
                alt="React-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
              />
            </a>
          </Grid>
        </Grid>

        <SubscribeForm />
        <Copyright />
      </Container>
    </>
  );
}
