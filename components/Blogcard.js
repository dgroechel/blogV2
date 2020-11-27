import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Button,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import Link from "../src/Link";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import _ from "lodash";
import dayjs from "dayjs";

const useStyles = makeStyles((theme) => ({
  postDiv: {
    padding: 10,
    contentVisibility: "auto",
  },
  title: {
    align: "left !important",
  },
}));



export default function Blogcard({ blog }) {
  const classes = useStyles();

  const blogs = blog.sort(function (a, b) {
    var keyA = a.date;
    var keyB = b.date;
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
  });

  return (
    <>
      <Box alignItems="left" alignContent="left">
        <Typography variant="h4">The Blog</Typography>
      </Box>

      <List>
        {blogs.map((blog, idx) => {
          return (
            <ListItem key={blog.id}>
              <div className={classes.postDiv}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <time dateTime={blog.date}>
                      {dayjs(blog.date).format("MMMM D, YYYY")}
                    </time>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      component={Link}
                      href="/blog/[slug]"
                      variant="h4"
                      as={`/blog/${blog.slug}`}
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
                      href="/blog/[slug]"
                      as={`/blog/${blog.slug}`}
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
    </>
  );
}
