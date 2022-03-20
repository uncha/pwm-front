import { Box, Grid, makeStyles } from "@material-ui/core";
import IframeResizer from "iframe-resizer-react";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
     
    </div>
  );
}

export default Home;
