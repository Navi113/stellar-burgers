import PropTypes from 'prop-types';
import styles from './BurgerIngredient.module.css';

import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredient(props) {
  return (
    <div className={`${styles.container} mr-6`}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img className={ styles.image } src={props.image} alt="#" />
      <p className='mt-1 mb-1'>
        <span className='text text_type_digits-medium mr-2'>
          {props.value}
        </span>
        <CurrencyIcon type="primary" />
      </p>
      <p className={`${styles.paragraph} text text_type_main-default`}>
        {props.discription}
      </p>
    </div>
  );
}

export default BurgerIngredient;