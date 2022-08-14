import React from "react";
import classes from "./AvailableMeals.module.css";
import { DUMMY_MEALS } from "../../data/dummy-meals";

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <ul>
        {(DUMMY_MEALS || []).map((meal) => {
          return <li key={meal.id}>{meal.name}</li>;
        })}
      </ul>
    </section>
  );
};

export default AvailableMeals;
