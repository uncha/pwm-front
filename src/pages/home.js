import { Box, Grid, makeStyles } from "@material-ui/core";
import axios from "axios";
import IframeResizer from "iframe-resizer-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    
  },
}));

function Home() {
  const classes = useStyles();

  useEffect(()=>{
    fetch('http://54.166.12.79:3000/api/test').then(res=>{
      console.log('res @@@', res)
    })
  }, [])

  return (
    <div className={classes.container}>
     
    </div>
  );
}

export default Home;
