import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link1 from "../src/Link";
import Drawer from "./Drawer";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttonCollapse: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  hamburger: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
}));

//test

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <Image
              width="250"
              height="50"
              src="/DavidGroechelGreen.png"
              alt="David Groechel"
            />

            <div className={classes.menuButton}>
              <Button component={Link1} href="/about">
                About
              </Button>
              <Button component={Link1} href="/">
                Blog
              </Button>
              <Button component={Link1} href="/projects">
                Projects
              </Button>
            </div>

            <div className={classes.buttonCollapse}>
              <Drawer />
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.offset} />
      </div>
    </>
  );
}
