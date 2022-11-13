import React from 'react';

import styles from './BurgerIngredient.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import bunOne from '../../images/bun-02.png'

function BurgerIngredient() {
  return (
    <div className={`${styles.container} mr-6`}>
      <img className={ styles.image } src={ bunOne } alt="#" />
      <p className='mt-1 mb-1'>
        <span className='text text_type_digits-medium mr-2'>
          20
        </span>
        <CurrencyIcon type="primary" />
      </p>
      <p className={`${styles.paragraph} text text_type_main-default`}>
        Краторная булка N-200i
      </p>
    </div>
  );
}

export default BurgerIngredient;