import React from "react";
import tinytime from 'tinytime'
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Button, Grid, Typography, Box } from "@material-ui/core";
import Link from "../src/Link";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import moment from 'moment'
import _ from 'lodash'

const useStyles = makeStyles((theme) => ({
  postDiv: {
    padding: 10,
  },
  title: {
    align: "left !important"
    
  }
}));

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export default function Blogcard({ blog }) {
  const classes = useStyles();
  const blogs = _.orderBy(blog, {'date': "11-10-2019"}, function(o) {
    return moment(o.date.format('MM-DD-YYYY'))
  }, ['asc'])
  return (
    <>
    <Box alignItems="left" alignContent="left">
    <Typography variant="h4">
      The Blog
    </Typography>
    </Box>
   
    
       <List>
        {blogs.map((blog, idx) => {
          return (
            <ListItem key={blog.id}>
              <div className={classes.postDiv}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                  <time dateTime={blog.date}>{postDateTemplate.render(new Date(blog.date))}</time>
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
                      ariaLabel="Read More"
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
