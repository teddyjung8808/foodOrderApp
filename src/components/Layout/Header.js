import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "../Layout/HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of deliciouys food" />
      </div>
    </>
  );
};

export default Header;
