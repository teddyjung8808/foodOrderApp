import React, { useContext } from "react";
import cartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const { id, name, price, desc } = props;

  const cartCtx = useContext(cartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({ id, name, amount, price });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name || "-"}</h3>
        <div className={classes.description}>{desc || "-"}</div>
        <div className={classes.price}>{`$ ${price.toFixed(2)}` || "-"}</div>
      </div>
      {/* Form 이 위치할 부분 */}
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
