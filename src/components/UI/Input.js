import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const { label, type, input } = props;
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} id={input.id} type={type || "text"} {...input} />
    </div>
  );
});

export default Input;
