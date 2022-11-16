import React from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { data } from '../utils/data'; 

import BurgerIngredientsItem from '../BurgerIngredientsItem/BurgerIngredientsItem.jsx';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const bunArr = data.filter(bun => {
  if(bun.type === "bun") {
    return bun;
  }
});

const sauceArr = data.filter(sauce => {
  if(sauce.type === "sauce") {
    return sauce;
  }
});

const mainArr = data.filter(main => {
  if(main.type === "main") {
    return main;
  }
});

const buns =bunArr.map(x => <BurgerIngredient image={x.image} value={x.price} discription={x.name} key={x._id}/>);
const sauces =sauceArr.map(x => <BurgerIngredient image={x.image} value={x.price} discription={x.name} key={x._id}/>);
const mains =mainArr.map(x => <BurgerIngredient image={x.image} value={x.price} discription={x.name} key={x._id}/>);

function BurgerIngredients() {

  return (
    <section className={`${styles.section} mr-10`}>
      <h1 className={`${styles.title} text text_type_main-large`}>
        Соберите бургер
      </h1>
      <div className={`${styles.tabs} mt-5`}>
        <Tab value="one" active={ true }>
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
        <BurgerIngredientsItem title="Булки">
          {buns}
        </BurgerIngredientsItem>     
        <BurgerIngredientsItem title="Соусы">
          {sauces}
        </BurgerIngredientsItem>  
        <BurgerIngredientsItem title="Начинки">
          {mains}
          {/* Здесь будут ингридиенты */}
        </BurgerIngredientsItem>
      </ul>
    </section>
  );
}

BurgerIngredients: PropTypes.shape({
  price: PropTypes.string,
})

// function OrderNumber(props) {
//   return (
//     <span>Номер заказа: {props.orderId}</span>
//     );
// }

// OrderNumber.propTypes = {
//   orderId: PropTypes.number
// }; 

// <OrderNumber orderId="1138" />

export default BurgerIngredients;