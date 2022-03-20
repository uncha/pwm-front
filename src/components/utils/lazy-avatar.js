import React from "react";
import { Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& svg": {
      color: "#fff",
    },
  },
}));

const LazyAvatar = ({ src, name, width, height }) => {
  const classes = useStyles();
  return (
    <Avatar
      className={classes.root}
      src={src}
      alt={name}
      width={width}
      height={height}
    />
  );
};

export default LazyAvatar;
