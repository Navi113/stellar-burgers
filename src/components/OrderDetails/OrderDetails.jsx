import React from 'react';
import PropTypes from 'prop-types';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from '../OrderDetails/OrderDetails.module.css'

import doneImage from '../../images/done.png';

function OrderDetails() {
  return (
    <>
      <section className={`${styles.section} mt-4`}>
        <h3
        className='text text_type_digits-large mb-8'>666666</h3>
        <p className='text text_type_main-default mb-15'>идентификатор заказа</p>
        <img src={doneImage} alt="Done" />
        <p className='text text_type_main-small mt-15 mb-2'>Ваш заказ начали готовить</p>
        <p className={`${styles.paragraph} mb-15`}>Дождитесь готовности на орбитальнйо станции</p>
      </section>
    </>
  );
}

export default OrderDetails;