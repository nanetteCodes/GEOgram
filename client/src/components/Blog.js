import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import Context from "../context";
import NoContent from "./Pin/NoContent";
import CreatePin from "./Pin/CreatePin";
import PinContent from "./Pin/PinContent";

import logo from '../geogram-logo.png';

const Blog = ({ classes }) => {
  const mobileSize = useMediaQuery("(max-width: 650px)");
  const { state } = useContext(Context);
  const { draft, currentPin } = state;

  let BlogContent;
  if (!draft && !currentPin) {
    BlogContent = NoContent;
  } else if (draft && !currentPin) {
    BlogContent = CreatePin;
  } else if (!draft && currentPin) {
    BlogContent = PinContent;
  }

  return (
    <Paper className={mobileSize ? classes.rootMobile : classes.root}>
      <div>
        <img src={logo} alt="logo" className={classes.logo} />
        <Divider/ >
      </div>
      <BlogContent />
    </Paper>
  );
};

const styles = {
  root: {
    minWidth: 350,
    maxWidth: 400,
    maxHeight: "calc(100vh - 64px)",
    display: "grid",
    flexDirection: "column"
  },
  rootMobile: {
    maxWidth: "100%",
    maxHeight: 300,
    overflowX: "hidden",
    overflowY: "scroll"
  },
  logo: {
    width: "200px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  }
};

export default withStyles(styles)(Blog);
