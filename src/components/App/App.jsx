import styles from "./App.module.css";

import AppHeader from "../AppHeader/AppHeader.jsx";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { request, config } from "../../utils/api";
import { useContext, useEffect, useState } from "react";
import { Context } from '../../services/Context'

function App() {
  const [data, setData] = useState([]);
  const [info, setInfo] = {};

  useEffect(() => {
    request(config.baseURL, config.headers)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </>
  );
}

export default App;
