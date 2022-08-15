import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const { label, type, input } = props;
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input id={input.id} type={type || "text"} {...input} />
    </div>
  );
};

export default Input;
