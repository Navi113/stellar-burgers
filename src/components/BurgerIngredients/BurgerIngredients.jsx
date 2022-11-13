import React from "react";

import styles from "./BurgerIngredients.module.css";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import BurgerIngredientsItem from "../BurgerIngredientsItem/BurgerIngredientsItem.jsx";

function BurgerIngredients() {
  return (
    <section className={`${styles.section} mr-10`}>
      <h1 className={`${styles.title} mt-10`}>
        Соберите бургер
      </h1>
      <div className={`${styles.tabs} mt-5`}>
        <Tab value="one">
          Булки
        </Tab>
        <Tab value="two">
          Соусы
        </Tab>
        <Tab value="three">
          Начинки
        </Tab>
      </div>
      <ul className={`${styles.ingridients} pl-4 pr-2 mt-10`}>
        <BurgerIngredientsItem title="Булки"/>
        <BurgerIngredientsItem title="Соусы"/>
      </ul>
    </section>
  );
}

export default BurgerIngredients;