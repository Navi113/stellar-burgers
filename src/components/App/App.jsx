import styles from "./App.module.css";

import AppHeader from "../AppHeader/AppHeader.jsx";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { fetchIngredients } from "../../utils/api";
import { useContext, useEffect, useState } from "react";
import { Context } from '../../services/Context'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchIngredients()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Context.Provider value={[data, setData]}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </Context.Provider>
  );
}

export default App;
