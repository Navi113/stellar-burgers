import styles from "./App.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppHeader from "../AppHeader/AppHeader.jsx";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { getIngredients } from "../../services/actions/ingredientsActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getIngredients()
  }, [dispatch]);

  return (
    <>
      <AppHeader />
        <main className={styles.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
    </>
  );
}

export default App;
