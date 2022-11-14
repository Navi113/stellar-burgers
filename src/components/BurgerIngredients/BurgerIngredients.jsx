import React from 'react';

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

// console.log(bunArr);

const sauceArr = data.filter(sauce => {
  if(sauce.type === "sauce") {
    return sauce;
  }
});

// console.log(sauceArr);

const mainArr = data.filter(main => {
  if(main.type === "main") {
    return main;
  }
});

// console.log(mainArr);

const buns =bunArr.map(x => <BurgerIngredient image={x.image} value={x.price} discription={x.name}/>);
const sauces =sauceArr.map(x => <BurgerIngredient image={x.image} value={x.price} discription={x.name}/>);
const mains =mainArr.map(x => <BurgerIngredient image={x.image} value={x.price} discription={x.name}/>);


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
          {/* <BurgerIngredient image={ bunTwo } value="20" discription="Краторная булка N-200i"/> 
          <BurgerIngredient image={ data[0].image } value={data[0].price} discription={data[0].name}/>        */}
        </BurgerIngredientsItem>     
        <BurgerIngredientsItem title="Соусы">
          {sauces}
          {/* <BurgerIngredient image={ sauceOne } value="30" discription="Краторная булка N-200i"/> 
          <BurgerIngredient image={ sauceTwo } value="30" discription="Флюоресцентная булка R2-D3"/>   
          <BurgerIngredient image={ sauceThree } value="30" discription="Краторная булка N-200i"/> 
          <BurgerIngredient image={ sauceFour } value="30" discription="Флюоресцентная булка R2-D3"/>       */}
        </BurgerIngredientsItem>  
        <BurgerIngredientsItem title="Начинки">
          {mains}
          {/* Здесь будут ингридиенты */}
        </BurgerIngredientsItem>
      </ul>
    </section>
  );
}

export default BurgerIngredients;