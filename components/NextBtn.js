import React from "react";
import { Button } from "@material-ui/core";
import Link from '../src/Link'
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export default function NextBtn({blog}) {
  return (
    <div>
      <Button
        component={Link}
        href={`/blog/${blog.slug}`}
        endIcon={<ArrowForwardIcon />}
        aria-label="Read More"
      >
        Continue Reading
      </Button>
    </div>
  );
}
