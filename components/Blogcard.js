import React from "react";
import tinytime from "tinytime";
import {
  List,
  ListItem,
  Button,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import Link from "next/link";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import moment from "moment";
import _ from "lodash";

const postDateTemplate = tinytime("{MMMM} {DD}, {YYYY}");

export default function Blogcard({ blog }) {
  const blogs = _.orderBy(
    blog,
    { date: "11-10-2019" },
    function (o) {
      return moment(o.date.format("MM-DD-YYYY"));
    },
    ["asc"]
  );

  return (
    <>
      <Box alignItems="left" alignContent="left">
        <Typography variant="h4">The Blog</Typography>
      </Box>

      <List>
        {blogs.map((blog) => {
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
                    <Typography color="primary" variant="h4">
                      {blog.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>{blog.description}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Link href="/blog/[slug]" as={`/blog/${blog.slug}`} passHref>
                      <Button
                        endIcon={<ArrowForwardIcon />}
                        aria-label="Read More"
                      >
                        Continue Reading
                      </Button>
                    </Link>
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
