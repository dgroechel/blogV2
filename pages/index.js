import React from "react";
import { Container, Grid } from "@material-ui/core";
import fs from "fs";
import matter from "gray-matter";
import { v4 as uuidv4 } from "uuid";
import Copyright from "../src/Copyright";
import Navbar from "../components/Navbar";
import Blogcard from "../components/Blogcard";
import WelcomeCard from "../components/WelcomeCard";
import Head from "next/head";

export default function Index(props) {
  return (
    <div>
      <Head>
        <title>David Groechel</title>
        <meta property="og:url" content="https://www.dgroechel.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="David Groechel" />
        <meta
          property="og:description"
          content="A personal blog by David Groechel. I like to write blog posts about tech, customer service, past experiences, and random musings"
        />
        <link rel="shortcut icon" href="/DG.ico" />
      </Head>

      <Container maxWidth="md">
        <Navbar />
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={2}
        >
          <WelcomeCard />

          <Blogcard blog={props.blogs} />
          <br />
        </Grid>

        <Copyright />
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/posts`, "utf-8");

  const blogs = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/posts/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuidv4() };
    });

  // By returning { props: blogs }, the IndexPage component
  // will receive `blogs` as a prop at build time
  return {
    props: { blogs },
  };
}
