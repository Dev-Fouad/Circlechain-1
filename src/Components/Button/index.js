import React from "react";
import "./index.scss";
const Button = ({name, color}) => {
  return <p className="button" style={{
    backgroundColor:color
  }} >{name}</p>
};

export default Button;
