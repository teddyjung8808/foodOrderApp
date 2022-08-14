import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const { name, price, desc } = props;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name || "-"}</h3>
        <div className={classes.description}>{desc || "-"}</div>
        <div className={classes.price}>{`$ ${price.toFixed(2)}` || "-"}</div>
      </div>
      {/* Form 이 위치할 부분 */}
    </li>
  );
};

export default MealItem;
