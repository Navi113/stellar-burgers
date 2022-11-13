import React from "react";

import styles from "./BurgerIngredientsItem.module.css";

import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

import  bunOne from "../../images/bun-01.png";

import bunTwo from "../../images/bun-02.png";


function BurgerIngredientsItem(props) {
  return (
    <li className={ styles.list_item }>
      <h2 className= "text text_type_main-medium">
        {props.title}
      </h2>
      <div className={`${styles.list_item_container} pl-4 pt-6`}>
        {props.children}
      </div>
    </li>
  );
}

export default BurgerIngredientsItem;
