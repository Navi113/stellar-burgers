import { useState, useEffect, useContext, useMemo } from "react";
import styles from "./BurgerConstructor.module.css";
import Modal from "../Modal/Modal";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails";
import { postOrder } from "../../utils/api";
import { setDraggedIngredients } from "../../services/actions/orderAction";
import { setOrderIdsArr } from "../../services/actions/orderDetailsAction";
import { useDispatch, useSelector } from "react-redux";
import { uuidv4 } from "../../utils/utils";
import { useDrop } from "react-dnd/dist/hooks";
import BurgerConstructorElement from "../BurgerConstructorElement/BurgerConstructorElement";

export default function BurgerConstructor() {
  const orderNumber = useSelector((state) => state.orderDetails.orderNumber);
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const modalVisible = useSelector(
    (state) => state.orderDetails.openOrderModal
  );
  const storeDragIngredients = useSelector(
    (state) => state.order.dragIngredients
  );
  const dispatch = useDispatch();
  const [ingredientsIds, setingredientsIds] = useState([]);
  const [draggedElements, setDraggedElements] = useState([]);
  const [selectedingredients, setSelectedingredients] = useState([]);
  const [draggedBun, setDraggedBun] = useState([]);
  const [ingredientsPrice, setIngredientsPrice] = useState(0);
  const [bunPrice, setBunPrice] = useState(0);

  useEffect(() => {
    dispatch(setDraggedIngredients(draggedElements));
  }, [draggedElements]);
  useEffect(() => {
    setDraggedElements(storeDragIngredients);
  }, [storeDragIngredients]);

  const handleDrop = (data) => {
    if (data.type === "sauce" || data.type === "main") {
      setDraggedElements([
        ...draggedElements,
        ...ingredients.filter((element) => element._id === data.id), 
      ]);
    } else if (data.type === "bun") {
      setDraggedBun([
        ...ingredients.filter((element) => element._id === data.id), 
      ]);
      return;
    }
  };

  const [, drop] = useDrop({
    accept: "dropped",
    drop(data) {
      handleDrop(data);
    },
  });


  const getOrderNumber = () => {
    if (ingredientsIds.length === 0) {
      return;
    } else {
      postOrder(ingredientsIds).then((res) => {
        dispatch({ type: "GET_ORDER_NUMBER", payload: res.order.number });
      });
    }
  };

  useEffect(() => {
    const ingredientsIdsArr = storeDragIngredients.map((i) => {
      return i._id;
    });
    const bunIdsArr = draggedBun.map((i) => {
      return i._id;
    });
    const sumIds = bunIdsArr.concat(ingredientsIdsArr, bunIdsArr);
    setingredientsIds(sumIds);
    setSelectedingredients(
      storeDragIngredients.map((i, index) => (
        <BurgerConstructorElement data={i} index={index} key={uuidv4()} />
      ))
    );
  }, [storeDragIngredients, draggedBun]);

  useEffect(() => {
    dispatch(setOrderIdsArr(ingredientsIds));
  }, [ingredientsIds]);

  const setBottomBun = () => {
    if (draggedBun.length === 0) {
      return;
    } else {
      return (
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={draggedBun[0].name + "(низ)"}
          price={draggedBun[0].price}
          thumbnail={draggedBun[0].image}
          key={1}
        />
      );
    }
  };

  const setTopBun = () => {
    if (draggedBun.length === 0) {
      return;
    } else {
      return (
        <ConstructorElement
          type="top"
          isLocked={true}
          text={draggedBun[0].name + "(верх)"}
          price={draggedBun[0].price}
          thumbnail={draggedBun[0].image}
          key={1}
        />
      );
    }
  };

  const bottomBun = useMemo(setBottomBun, [draggedBun]);
  const topBun = useMemo(setTopBun, [draggedBun]);

  //Цена
  useEffect(() => {
    const sum = storeDragIngredients
      .map((i) => i.price)
      .reduce((a, b) => a + b, 0);
    setIngredientsPrice(sum);
  }, [storeDragIngredients]);

  useEffect(() => {
    if (draggedBun.length > 0) {
      const sum = draggedBun[0].price * 2;
      setBunPrice(sum);
    } else {
      return;
    }
  }, [draggedBun]);

  const handlerModalOpen = () => {
    getOrderNumber();
    dispatch({ type: "OPEN_ORDER_MODAL" }); 
  };

  const handlerModalClose = () => {
    dispatch({ type: "CLOSE_ORDER_MODAL" });
  };


  return (
    <>
      <section className={`${styles.section} pt-25 pl-4`}>
        <div className={"pl-8 pt-25 mb-4"}>{topBun}</div>
        <ul ref={drop} className={`${styles.list} mr-10`}>
          {selectedingredients}
        </ul>
        <div className={"pl-8 mt-4 mb-10"}>{bottomBun}</div>

        <div className={styles.info}>
          <p className="text text_type_digits-medium mr-1">
            {ingredientsPrice + bunPrice}
          </p>
          <CurrencyIcon type="primary" />
          <Button
            onClick={handlerModalOpen}
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
        <Modal onClose={handlerModalClose}>
          <OrderDetails orderNum={orderNumber} />
        </Modal>
      )}
    </>
  );
}
