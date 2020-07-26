import React from "react";
import { Container, Grid } from "@material-ui/core";
import Copyright from "../src/Copyright";
import Navbar from "../components/Navbar";
import Blogcard from "../components/Blogcard";
import WelcomeCard from "../components/WelcomeCard";
import SubscribeForm from "../components/SubscribeForm";
import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";

export default function Index(props) {
  return (
    <div>
      <Head>
        <title>David Groechel</title>
        <meta property="og:url" content="https://www.dgroechel.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="David Groechel" />
        <meta property="og:image" content="/DavidGroechelGreen.png" />
        <meta
          property="og:description"
          content="A personal blog by David Groechel. I like to write blog posts about tech, customer service, past experiences, and random musings"
        />
         <meta
          name="description"
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
          <SubscribeForm />
        </Grid>

        <Copyright />
      </Container>
    </div>
  );
}

export async function getStaticProps() {

  const files = fs.readdirSync(`${process.cwd()}/posts`);

  const blogs = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    return {
      slug: filename.replace(".md", ""),
      ...data
    };
  });

  return {
    props: {
      blogs,
    },
  };
}