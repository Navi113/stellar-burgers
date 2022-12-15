import { useEffect, useState } from "react";
import styles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsItem from "../BurgerIngredientsItem/BurgerIngredientsItem.jsx";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import Modal from "../Modal/Modal";
import IngredientsDetails from "../IngredientsDetails/IngredientsDetails";
import { useSelector, useDispatch } from "react-redux";

export default function BurgerIngredients() {
  const dispatch = useDispatch();
  const [sauces, setSauces] = useState([]);
  const [mains, setMains] = useState([]);
  const [buns, setBuns] = useState([]);
  const ingredients = useSelector(state => state.ingredients.ingredients);
  const modalOpen = useSelector(state => state.ingredientDetails.openingredientModal);
  const modalDetail = useSelector(state => state.ingredientDetails.modalDetails);
  const [bunsCategoryActive, setBunsCategoryActive] = useState(true);
  const [mainsCategoryActive, setMainsCategoryActive] = useState(false);
  const [saucesCategoryActive, setSaucesCategoryActive] = useState(false);
  const [categories, setCategories] = useState();

  const handlerModalOpen = (value) => {
    dispatch({ type: "OPEN_INGREDIENT_MODAL", payload: value });
  };

  const handlerModalClose = () => {
    dispatch({ type: "CLOSE_INGREDIENT_MODAL" });
  };

  useEffect(() => {
    const saucesArr = ingredients.filter((ingredient) => {
      if (ingredient.type === "sauce") {
        return ingredient;
      }
    });

    const sauces = saucesArr.map((i) => (
      <BurgerIngredient
      image={i.image}
      fat={i.fat}
      proteins={i.proteins}
      calories={i.calories}
      carbohydrates={i.carbohydrates}
      name={i.name}
      imageLarge={i.imageLarge}
      ingredient={i}
      price={i.price}
      id={i._id}
      onModalOpen={handlerModalOpen}
      key={i._id}
      />
    ));
    setSauces(sauces);
  }, [ingredients]);

  useEffect(() => {
    const mainsArr = ingredients.filter((ingredient) => {
      if (ingredient.type === "main") {
        return ingredient;
      }
    });

    const mains = mainsArr.map((i) => (
      <BurgerIngredient
      image={i.image}
      fat={i.fat}
      proteins={i.proteins}
      calories={i.calories}
      carbohydrates={i.carbohydrates}
      name={i.name}
      imageLarge={i.imageLarge}
      ingredient={i}
      price={i.price}
      id={i._id}
      onModalOpen={handlerModalOpen}
      key={i._id}
      />
    ));
    setMains(mains);
  }, [ingredients]);

  useEffect(() => {
    const bunsArr = ingredients.filter((ingredient) => {
      if (ingredient.type === "bun") {
        return ingredient;
      }
    });

    const buns = bunsArr.map((i) => (
      <BurgerIngredient
      image={i.image}
      fat={i.fat}
      proteins={i.proteins}
      calories={i.calories}
      carbohydrates={i.carbohydrates}
      name={i.name}
      imageLarge={i.imageLarge}
      ingredient={i}
      price={i.price}
      id={i._id}
      onModalOpen={handlerModalOpen}
      key={i._id}
      />
    ));
    setBuns(buns);
  }, [ingredients]);

  useEffect(() => {
    setCategories(document.getElementById("categories"));
    function check() {
      if (categories === null || categories === undefined) {
        return;
      } else {
        categories.addEventListener("scroll", (evt) => {
          const scrollPosition = evt.target.scrollTop;
          if (scrollPosition > 245) {
            setBunsCategoryActive(false);
            setSaucesCategoryActive(true);
          }
          if (scrollPosition < 245) {
            setBunsCategoryActive(true);
            setSaucesCategoryActive(false);
          }
          if (scrollPosition > 725) {
            setMainsCategoryActive(true);
            setSaucesCategoryActive(false);
          }
          if (scrollPosition < 725) {
            setMainsCategoryActive(false);
          }
        });
      }
    }
    check();
  }, [categories]);

  return (
    <>
      <section className={`${styles.section} mr-10`}>
        <h1 className={`${styles.title} text text_type_main-large mt-10`}>
          Соберите бургер
        </h1>
        <div className={`${styles.tabs} mt-5`}>
          <Tab value="one" active={bunsCategoryActive}>
            Булки
          </Tab>
          <Tab value="two" active={saucesCategoryActive}>Соусы</Tab>
          <Tab value="three" active={mainsCategoryActive}>Начинки</Tab>
        </div>
        <ul className={`${styles.ingredients} pl-4 pr-2 mt-10`} id="categories">
          <BurgerIngredientsItem title="Булки">{buns}</BurgerIngredientsItem>
          <BurgerIngredientsItem title="Соусы">{sauces}</BurgerIngredientsItem>
          <BurgerIngredientsItem title="Начинки">{mains}</BurgerIngredientsItem>
        </ul>
      </section>
      {modalOpen && (
        <Modal onClose={handlerModalClose}>
          <IngredientsDetails
            image={modalDetail.imageLarge}
            fat={modalDetail.fat}
            proteins={modalDetail.proteins}
            calories={modalDetail.calories}
            carbohydrates={modalDetail.carbohydrates}
            name={modalDetail.name}
          />
        </Modal>
      )}
    </>
  );
}
