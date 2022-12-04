import React, { useState, useEffect, useContext } from "react";
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

export default function BurgerConstructor(props) {
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

  useEffect(() => {
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
    checkData();
  }, [ingredients]);

  useEffect(() => {
    if (sauces.length === 0) {
      console.log("error");
      return;
    } else {
      const selectedItems = sauces.concat(mains);
      const count = selectedItems
        .map((i) => {
          return i.price;
        })
        .reduce((a, b) => a + b, 0);
      console.log(count);
      setCost(count);
      setSelectedIngredients(selectedItems); // рендер элементов конструктора

      const arrIds = selectedItems.map((id) => {
        return id._id;
      });

      postOrder(arrIds).then((res) => {
        setOrdernumber(res.order.number);
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
        <ul className={`${styles.list} mr-10`}>{elements}</ul>
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

BurgerConstructor.propTypes = {
  data: PropTypes.array.isRequired,
};
