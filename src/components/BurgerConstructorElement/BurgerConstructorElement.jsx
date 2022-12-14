import { useDrag, useDrop } from "react-dnd";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructorElement.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setDraggedIngredients } from "../../services/actions/orderAction";
import { uuidv4 } from "../../utils/utils";

export default function BurgerConstructorElement({ data, index }) {
  const dispatch = useDispatch();
  const hoverIndex = index;
  const storeDragIngredients = useSelector(
    (state) => state.order.dragIngredients
  );

  const onSortHandler = (arr, dragIndex) => {
    const element = arr[dragIndex];
    const newArr = [...arr];
    newArr.splice(dragIndex, 1);
    newArr.splice(hoverIndex, 0, element);
    dispatch(setDraggedIngredients(newArr));
  };

  const deleteIngredient = () => {
    const arr = storeDragIngredients.map((i) => i);
    const newArr = [...arr];
    newArr.splice(index, 1);
    dispatch(setDraggedIngredients(newArr));
  };

  const [, drag] = useDrag({
    item: { index },
    type: "sort_ingr",
  });

  const [, drop] = useDrop({
    accept: "sort_ingr",
    drop({ index }) {
      const dragIndex = index;
      onSortHandler(storeDragIngredients, dragIndex);
    },
  });



  return (
    <div ref={drop}>
      <div className={`${styles.elementWrapper} pt-4`} key={data.id} ref={drag}>
        <DragIcon />
        <ConstructorElement
          handleClose={deleteIngredient}
          text={data.name}
          thumbnail={data.image}
          isLocked={false}
          price={data.price}
        />
      </div>
    </div>
  );
}
