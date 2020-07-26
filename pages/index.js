import React from "react";
import {
  Container,
  List,
  ListItem,
  Button,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import Copyright from "../src/Copyright";
import Navbar from "../components/Navbar";
import WelcomeCard from "../components/WelcomeCard";
import SubscribeForm from "../components/SubscribeForm";
import Head from "next/head";
import tinytime from "tinytime";
import Link from "../src/Link";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import moment from "moment";
import _ from "lodash";

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export default function Index(props) {
  const blogs = _.orderBy(
    props.blogs,
    { date: "11-10-2019" },
    function (o) {
      return moment(o.date.format("MM-DD-YYYY"));
    },
    ["asc"]
  );
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

          <Box alignItems="left" alignContent="left">
            <Typography variant="h4">The Blog</Typography>
          </Box>

          <List>
            {blogs.map((blog, idx) => {
              return (
                <ListItem key={blog.id}>
                  <div>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <time dateTime={blog.date}>
                          {postDateTemplate.render(new Date(blog.date))}
                        </time>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          component={Link}
                          href={`/blog/${blog.slug}`}
                          variant="h4"
                        >
                          {blog.title}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>{blog.description}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          component={Link}
                          href={`/blog/${blog.slug}`}
                          endIcon={<ArrowForwardIcon />}
                          aria-label="Read More"
                        >
                          Continue Reading
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </ListItem>
              );
            })}
          </List>
          <SubscribeForm />
        </Grid>

        <Copyright />
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");
  const { v4: uuid } = require("uuid");

  const files = fs.readdirSync(`${process.cwd()}/posts`, "utf-8");

  const blogs = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/posts/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  // By returning { props: blogs }, the IndexPage component
  // will receive `blogs` as a prop at build time
  return {
    props: { blogs },
  };
}
