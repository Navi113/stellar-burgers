import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styles from "./BurgerConstructor.module.css";
import Modal from "../Modal/Modal";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails";
import { Context } from '../../services/Context';

export default function BurgerConstructor(props) {
  const [ingredients] = useContext(Context); 
  const [info, setInfo] = useState([]);
  const [elements, setElements] = useState([]);
  const handlerOpenPopup = () => {
    setModalVisible(true);
  };
  const handlerClosePopup = () => {
    setModalVisible(false);
  };
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => { 
    setInfo(props.data);
  }, [props.data]);

  useEffect(() => {
    const elements = info.map((item) => (
      <li className={`${styles.item} mb-4 mr-2`} key={item._id}>
        <DragIcon />
        <ConstructorElement
          text={item.name}
          thumbnail={item.image}
          isLocked={false}
          price={item.price}
        />
        </li>
    ));
    setElements(elements);
  }, [info]);

  return (
    <>
      <section className={`${styles.section} pt-25 pl-4`}>
        <div className="pl-8 mb-4">
          <ConstructorElement
            className="ml-8"
            type="top"
            isLocked={true}
            text={"Флюоресцентная булка R2-D3 (верх)"}
            price={850}
            thumbnail="https://code.s3.yandex.net/react/code/bun-01.png"
          />
        </div>
        <ul className={`${styles.list} mr-10`}>
          {elements.slice(2)}    {/*убрали булки*/}
        </ul>
        <div className="pl-8 mt-4 mb-10">
          <ConstructorElement
            className="ml-8"
            type="bottom"
            isLocked={true}
            text={"Флюоресцентная булка R2-D3 (низ)"}
            price={850}
            thumbnail="https://code.s3.yandex.net/react/code/bun-01.png"
          />
        </div>
        <div className={styles.info}>
          <p className="text text_type_digits-medium mr-1">6660</p>
          <CurrencyIcon type="primary" />
          <Button
            onClick={handlerOpenPopup}
            htmlType="button"
            type="primary"
            size="large"
            extraClass="ml-10"
          >
            Оформить заказ
          </Button>
        </div>
      </section>
      {modalVisible && (
        <Modal onClose={handlerClosePopup}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.array.isRequired,
};
