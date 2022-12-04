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
  const [selectedIngredients, setSelectedIngredients] = useState([]); // Состояние выбранных 
  const [buns, setBuns] = useState([]); // Состояние булок
  const [sauces, setSauces] = useState([]); // Состояние соусов
  const [mains, setMains] = useState([]);  // Состояние начинок
  const [modalVisible, setModalVisible] = useState(false);

  const handlerOpenPopup = () => {
    setModalVisible(true);
  };
  const handlerClosePopup = () => {
    setModalVisible(false);
  };
  
  useEffect(() => {
    const bunsArray = ingredients.filter((item) => {
      if (item.type === "bun") {
        return item;
      }
    });
    setBuns(bunsArray);
  }, [ingredients]);

  useEffect(() => {
    const saucesArray = ingredients.filter((item) => {
      if (item.type === "sauce") {
        return item;
      }
    });
    setSauces(saucesArray);
  }, [ingredients]);

  useEffect(() => {
    const mainsArray = ingredients.filter((item) => {
      if (item.type === "main") {
        return item;
      }
    });
    setMains(mainsArray);
  }, [ingredients]);

  useEffect(() => {
    const selectedItems = sauces.concat(mains);
    setSelectedIngredients(selectedItems)
  }, [ingredients])

  useEffect(() => { 
    setInfo(props.data);
  }, [props.data]);

  useEffect(() => {
    const elements = selectedIngredients.map((item) => (
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
  }, [selectedIngredients]);

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
          {elements}
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
