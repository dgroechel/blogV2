import React from "react";
import { Button } from "@material-ui/core";
import Link from '../src/Link'

export default function NextBtn() {
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
