import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  const el = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, el)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, el)}
    </>
  );
};

export default Modal;
