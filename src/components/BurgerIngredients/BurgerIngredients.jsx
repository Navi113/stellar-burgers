import React from 'react';

import styles from './BurgerIngredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerIngredientsItem from '../BurgerIngredientsItem/BurgerIngredientsItem.jsx';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

import bunOne from '../../images/bun-01.png';
import bunTwo from '../../images/bun-02.png';
import sauceOne from  '../../images/sauce-01.png'
import sauceTwo from  '../../images/sauce-02.png'
import sauceThree from  '../../images/sauce-03.png'
import sauceFour from  '../../images/sauce-04.png'



function BurgerIngredients() {

  return (
    <section className={`${styles.section} mr-10`}>
      <h1 className={`${styles.title} text text_type_main-large`}>
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
        <BurgerIngredientsItem title="Булки">
          <BurgerIngredient image={ bunTwo} value="20" discription="Краторная булка N-200i"/> 
          <BurgerIngredient image={ bunOne} value="20" discription="Флюоресцентная булка R2-D3"/>       
        </BurgerIngredientsItem>     
        <BurgerIngredientsItem title="Соусы">
          <BurgerIngredient image={ sauceOne } value="30" discription="Краторная булка N-200i"/> 
          <BurgerIngredient image={ sauceTwo } value="30" discription="Флюоресцентная булка R2-D3"/>   
          <BurgerIngredient image={ sauceThree } value="30" discription="Краторная булка N-200i"/> 
          <BurgerIngredient image={ sauceFour } value="30" discription="Флюоресцентная булка R2-D3"/>      
        </BurgerIngredientsItem>  
        <BurgerIngredientsItem title="Начинки">
          {/* Здесь будут ингридиенты */}
        </BurgerIngredientsItem>
      </ul>
    </section>
  );
}

export default BurgerIngredients;