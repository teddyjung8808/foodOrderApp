import React, { useState } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "../Layout/HeaderCartButton";
import ModalPortal from "../Portal/Portal";
import Cart from "../Cart/Cart";

const Header = (props) => {
  const [modalOn, setModalOn] = useState(false);

  const cartButtonClickHandler = () => {
    console.log("clicked");
    setModalOn(true);
  };

  const cartModalCloseHandler = () => {
    setModalOn(false);
  };
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={cartButtonClickHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of deliciouys food" />
      </div>
      <ModalPortal>
        {modalOn && <Cart closeModal={cartModalCloseHandler} />}
      </ModalPortal>
    </>
  );
};

export default Header;
