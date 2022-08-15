import ReactDOM from "react-dom";

const ModalPortal = (props) => {
  const el = document.getElementById("modal");
  return ReactDOM.createPortal(props.children, el);
};

export default ModalPortal;
