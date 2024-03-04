import React from "react";

// import Cimage from "../../assets/"
// import cimage from "../../../public/assets/"

const Image = ({ srcImg, altText, className }) => {
  return (
    <img
      src={`./assets/${srcImg}`}
      alt={altText}
      className={`w-full ${className}`}
    />
  );
};

export default Image;
