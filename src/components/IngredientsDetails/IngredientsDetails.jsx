import React from 'react';
import PropTypes from 'prop-types';

import styles from '../IngredientsDetails/IngredientsDetails.module.css'

import { data } from '../utils/data'; 

const songsObject = JSON.stringify(data);
const dataObj = JSON.parse(songsObject);

function IngredientsDetails() {
  return(
    <section className={styles.section}>
      <img 
        className='mb-4'
        src={dataObj[2].image_large} 
        alt={dataObj[2].name} 
      />
      <h3 className='text text_type_main-medium mb-8'>{dataObj[2].name}</h3>
      <div className={styles.infoWrapper}>
        <div className={`${styles.info} mr-5`}>
          <span className="text_type_main-default  text_color_inactive mb-2">Калорий, ккал</span>
          <span className="text_type_digits-default text_color_inactive">{dataObj[2].calories}</span>
        </div>
        <div className={`${styles.info} mr-5`}>
          <span className="text_type_main-default text_color_inactive mb-2">Белкти, г</span>
          <span className="text_type_digits-default text_color_inactive">{dataObj[2].proteins}</span>
        </div>
        <div className={`${styles.info} mr-5`}>
          <span className="text_type_main-default text_color_inactive mb-2">Жиры, г</span>
          <span className="text_type_digits-default text_color_inactive">{dataObj[2].fat}</span>
        </div>
        <div className={styles.info}>
          <span className="text_type_main-default text_color_inactive mb-2">Углеводы, г</span>
          <span className="text_type_digits-default text_color_inactive">{dataObj[2].carbohydrates}</span>
        </div>
      </div>
    </section>
  );
}

export default IngredientsDetails;