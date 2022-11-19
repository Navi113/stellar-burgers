import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import styles from "./BurgerConstructor.module.css";

import Modal from "../Modal/Modal";
// import { info } from '../utils/info.js'
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails";



function BurgerConstructor(props) {
  
  const [info, setInfo] = useState([]);
  const [elements, setElements] = useState([])
  const data = props.data

  const handlerOpenPopup = (value) => {
    setModalVisible(true) 
  };

  const handlerClosePopup = (value) => {
    setModalVisible(false)
  };

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const closeOnEsc = (evt) => {
      evt.key === 'Escape' && handlerClosePopup();
    };

    document.addEventListener('keydown', closeOnEsc);

    return () => {
      document.removeEventListener('keydown', closeOnEsc);
    }
  }, []);

  useEffect(() => {
    setInfo(data)
  }, [data])

  useEffect(() => {
    const elements = info.map(i =>
      <>
          <DragIcon />
          <ConstructorElement text={i.name} thumbnail={i.image} isLocked={false} price={i.price} key={i._id} />
      </>
    )
    setElements(elements)
  }, [info])


  return (
    <>
      <section className={`${styles.section} pt-25 pl-4`}>
        <div className="pl-8 mb-4">
          <ConstructorElement 
            className="ml-8"
            type="top"
            isLocked={true}
            text={'Флюоресцентная булка R2-D3 (верх)'}
            price={850}
            thumbnail='https://code.s3.yandex.net/react/code/bun-01.png'
          />
        </div>
        <ul className={`${styles.list} mr-10`}>
          <li 
            className={`${styles.item} mb-4 mr-2`}>
            {elements[2]}
          </li>
          <li 
            className={`${styles.item} mb-4 mr-2`}>
            {elements[4]}
          </li>
          <li 
           className={`${styles.item} mb-4 mr-2`}>
           {elements[4]}
          </li>
          <li
            className={`${styles.item} mb-4 mr-2`}>
            {elements[4]}
          </li>
          <li 
           className={`${styles.item} mb-4 mr-2`}>
            {elements[2]}
          </li>
          <li 
            className={`${styles.item} mb-4 mr-2`}>
           {elements[8]}
          </li>
          <li 
            className={`${styles.item} mb-4 mr-2`}>
            {elements[9]}
          </li>
          <li 
            className={`${styles.item} mb-4 mr-2`}>
            {elements[0]}
          </li>
        </ul>
        <div className="pl-8 mt-4 mb-10">
        <ConstructorElement 
            className="ml-8"
            type="bottom"
            isLocked={true}
            text={'Флюоресцентная булка R2-D3 (низ)'}
            price={850}
            thumbnail='https://code.s3.yandex.net/react/code/bun-01.png'
          />
        </div>
        <div className={styles.info}>
          <p className="text text_type_digits-medium mr-1">6660</p>
          <CurrencyIcon type="primary" />
          <Button onClick={handlerOpenPopup} htmlType="button" type="primary" size="large" extraClass="ml-10">
            Оформить заказ
          </Button>
        </div>
      </section>
      {modalVisible && (<Modal onClose={handlerClosePopup} details={<OrderDetails />} />)} 
    </>
  );
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  data: PropTypes.array.isRequired
}