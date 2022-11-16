import React from "react";

import PropTypes from 'prop-types';

import styles from "./BurgerConstructor.module.css";

import { data } from '../utils/data.js'

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const songsObject = JSON.stringify(data);
const dataObj = JSON.parse(songsObject);

function BurgerConstructor() {
  return (
    <section className={`${styles.section} pt-25 pl-4`}>
      <div className="pl-8 mb-4">
        <ConstructorElement 
          className="ml-8"
          type="top"
          isLocked={true}
          text={`${dataObj[0].name} (верх)`}
          price={dataObj[0].price}
          thumbnail={dataObj[0].image_mobile}
        />
      </div>
      <ul className={`${styles.list} mr-10`}>
        <li 
          className={`${styles.item} mb-4 mr-2`}>
          <DragIcon type="primary" />
          <ConstructorElement 
            isLocked={false}
            text={dataObj[3].name}
            price={dataObj[3].price}
            thumbnail={dataObj[3].image_mobile}
          />
        </li>
        <li 
          className={`${styles.item} mb-4 mr-2`}>
          <DragIcon type="primary" />
          <ConstructorElement 
            isLocked={false}
            text={dataObj[2].name}
            price={dataObj[2].price}
            thumbnail={dataObj[2].image_mobile}
          />
        </li>
        <li 
          className={`${styles.item} mb-4 mr-2`}>
          <DragIcon type="primary" />
          <ConstructorElement 
            isLocked={false}
            text={dataObj[7].name}
            price={dataObj[7].price}
            thumbnail={dataObj[7].image_mobile}
          />
        </li>
        <li
          className={`${styles.item} mb-4 mr-2`}>
          <DragIcon type="primary" />
          <ConstructorElement 
            isLocked={false}
            text={dataObj[8].name}
            price={dataObj[8].price}
            thumbnail={dataObj[8].image_mobile}
          />
        </li>
        <li 
          className={`${styles.item} mb-4 mr-2`}>
          <DragIcon type="primary" />
          <ConstructorElement 
            isLocked={false}
            text={dataObj[9].name}
            price={dataObj[9].price}
            thumbnail={dataObj[9].image_mobile}
          />
        </li>
        <li 
          className={`${styles.item} mb-4 mr-2`}>
          <DragIcon type="primary" />
          <ConstructorElement 
            isLocked={false}
            text={dataObj[8].name}
            price={dataObj[8].price}
            thumbnail={dataObj[8].image_mobile}
          />
        </li>
        <li 
          className={`${styles.item} mb-4 mr-2`}>
          <DragIcon type="primary" />
          <ConstructorElement 
            isLocked={false}
            text={dataObj[3].name}
            price={dataObj[3].price}
            thumbnail={dataObj[3].image_mobile}
          />
        </li>
        <li 
          className={`${styles.item} mb-4 mr-2`}>
          <DragIcon type="primary" />
          <ConstructorElement 
            isLocked={false}
            text={dataObj[9].name}
            price={dataObj[9].price}
            thumbnail={dataObj[9].image_mobile}
          />
        </li>
      </ul>
      <div className="pl-8 mt-4 mb-10">
        <ConstructorElement 
          type="bottom"
          isLocked={true}
          text={`${dataObj[0].name} (верх)`}
          price={dataObj[0].price}
          thumbnail={dataObj[0].image_mobile}
        />
      </div>
      <div className={styles.info}>
        <p className="text text_type_digits-medium mr-1">6660</p>
        <CurrencyIcon type="primary" />
        <Button htmlType="button" type="primary" size="large" extraClass="ml-10">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;