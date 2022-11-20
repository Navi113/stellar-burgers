import PropTypes from "prop-types";
import styles from "./BurgerIngredient.module.css";
import { useEffect } from "react";

import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientType from "../utils/types.js";

function BurgerIngredient(props) {
  const handlerOpenPopup = () => {
    props.onOpen({
      image: props.image,
      fat: props.fat,
      proteins: props.proteins,
      calories: props.calories,
      carbohydrates: props.carbohydrates,
      name: props.name,
      imageLarge: props.imageLarge,
    });
  };

  return (
    <div onClick={handlerOpenPopup} className={`${styles.container} mr-6`}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img className={styles.image} src={props.image} alt={props.discription} />
      <p className="mt-1 mb-1">
        <span className="text text_type_digits-medium mr-2">{props.value}</span>
        <CurrencyIcon type="primary" />
      </p>
      <p className={`${styles.paragraph} text text_type_main-default`}>
        {props.discription}
      </p>
    </div>
  );
}

export default BurgerIngredient;

BurgerIngredient.propTypes = ingredientType;
