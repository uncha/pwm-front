import React from "react";

const LazyImage = ({ src, name, width, height }) => {
  return <img src={src} alt={name} width={width} height={height} />;
};

export default LazyImage;
