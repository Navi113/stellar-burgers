import styles from "./BurgerIngredient.module.css";
import { useEffect } from "react";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd/dist/hooks";
import { useSelector } from "react-redux";
import { useState } from "react";
import ingredientType from "../../utils/types";

function BurgerIngredient(props) {
  const [ingredient, setingredient] = useState({});
  const idsArr = useSelector((state) => state.orderDetails.orderIds);
  const [count, setCount] = useState(false);

  const [{ isDragging }, drag] = useDrag({
    item: { id: props.id, type: props.ingredient.type },
    type: "dropped",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    setingredient(props.ingredient);
  }, [props.ingredient]);

  useEffect(() => {
    const agreementscidences = idsArr.filter((i) => i === props.id);
    setCount(agreementscidences.length);
  }, [idsArr]);

  const handlerModalOpen = () => {
    console.log(ingredient);
    props.onModalOpen({
      name: ingredient.name,
      image: ingredient.image,
      fat: ingredient.fat,
      proteins: ingredient.proteins,
      calories: ingredient.calories,
      carbohydrates: ingredient.carbohydrates,
      imageLarge: ingredient.image_large,
    });
  };

  return (
    <div
      onClick={handlerModalOpen}
      className={`${styles.container} mr-6`}
      ref={drag}
    >
      {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
      <img className={styles.image} src={props.image} alt={props.discription} />
      <p className={`${styles.price} mt-1 mb-1`}>
        <span className="text text_type_digits-default mr-2">{props.price}</span>
        <CurrencyIcon type="primary" />
      </p>
      <p className={`${styles.paragraph} text text_type_main-default`}>
        {props.name}
      </p>
    </div>
  );
}

export default BurgerIngredient;

BurgerIngredient.propTypes = ingredientType;
