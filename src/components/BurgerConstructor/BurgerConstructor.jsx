import React, { useState, useEffect, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BurgerConstructor.module.css";
import Modal from "../Modal/Modal";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails";
import { Context } from "../../services/Context";
import { postOrder } from "../../utils/api";

export default function BurgerConstructor() {
  const [ingredients] = useContext(Context);
  const [elements, setElements] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]); // Состояние выбранных
  const [buns, setBuns] = useState([]); // Состояние булок
  const [sauces, setSauces] = useState([]); // Состояние соусов
  const [mains, setMains] = useState([]); // Состояние начинок
  const [modalVisible, setModalVisible] = useState(false); // Состояние модального окна
  const [orderNumber, setOrdernumber] = useState([]); // Состояние номера заказа в модальном окне
  const [cost, setCost] = useState(); // Состояние итоговой стоимости заказа
  // Обработчики
  const handleOpenPopup = () => setModalVisible(true);
  const handleClosePopup = () => setModalVisible(false);

  function checkData() {
    if (ingredients.length === 0) {
      return;
    } else {
      const saucesArray = ingredients.filter((item) => {
        if (item.type === "sauce") {
          return item;
        }
      });

      setSauces(saucesArray);

      const mainsArray = ingredients.filter((item) => {
        if (item.type === "main") {
          return item;
        }
      });

      setMains(mainsArray);

      const bunsArray = ingredients.filter((item) => {
        if (item.type === "bun") {
          return item;
        }
      });

      setBuns(bunsArray);
    }
  }

  const setArrays = useMemo(checkData, [ingredients]);

  useEffect(() => {
    if (sauces.length === 0) {
      return;
    } else {
      const selectedItems = sauces.concat(mains); // Сложение двух массивов
      const count = selectedItems
        .map((i) => {
          return i.price;
        })
        .reduce((a, b) => a + b, 0);
      const bunsCount = buns.slice(1)[0].price * 2;
      setCost(count + bunsCount); // Изменение состояния счетчика
      setSelectedIngredients(selectedItems); // рендер элементов конструктора

      const arrIds = selectedItems.map((id) => {
        return id._id;
      });

      postOrder(arrIds)
        .then((res) => {
          setOrdernumber(res.order.number);
        })
        .catch(() => {
          console.log("Id не получены");
        });
    }
  }, [sauces]);

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

  function selectTopBun() {
    return(
        buns.filter((i, index) => index === 1)
        .map((i) => (
          <div key="1">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={i.name + " (верх)"}
              price={i.price}
              thumbnail={i.image}
            />
          </div>
        ))
    )
  }

  function selectBottomBun() {
    return(
        buns.filter((i, index) => index === 1)
        .map((i) => (
          <div key="1">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={i.name + " (низ)"}
              price={i.price}
              thumbnail={i.image}
            />
          </div>
        ))
    )
  }


  const topBun = useMemo(selectTopBun, [buns])
  const bottomBun =useMemo(selectBottomBun, [buns])

  return (
    <>
      <section className={`${styles.section} pt-25 pl-4`}>
        <div className={"pl-8 pt-25 mb-4"}>
          {topBun}
        </div>
        <ul className={`${styles.list} mr-10`}>{elements}</ul>
        <div className={"pl-8 mt-4 mb-10"}>
          {bottomBun}
        </div>

        <div className={styles.info}>
          <p className="text text_type_digits-medium mr-1">{cost}</p>
          <CurrencyIcon type="primary" />
          <Button
            onClick={handleOpenPopup}
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
        <Modal onClose={handleClosePopup}>
          <OrderDetails orderNum={orderNumber} />
        </Modal>
      )}
    </>
  );
}
