import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import { Grid, IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Copyright() {
  return (
    <div style={{ padding: 30 }}>
      <Grid container spacing={1}>
        <Grid item xs={6} >
          <Typography variant="body2" color="textSecondary" align="left">
            {"Copyright © "}
            <MuiLink color="inherit" href="https://www.dgroechel.com/">
              David Groechel
            </MuiLink>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <IconButton rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/dgroechel/" style={{float: "right"}}>
            <InstagramIcon />
          </IconButton>
          <IconButton rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dgroechel/" style={{float: "right"}}>
            <LinkedInIcon />
          </IconButton>
          <IconButton rel="noopener noreferrer" target="_blank" href="https://github.com/dgroechel" style={{float: "right"}}>
            <GitHubIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
