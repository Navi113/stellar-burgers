import styles from './App.module.css'

import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { fecthData } from '../utils/api';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fecthData()
    .then((res) => {
      setData(res.data);
    })
    .catch((err => console.log(err)))
  }, [])

  useEffect(() => {
  }, [data])

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data} />
      </main>
    </>
  );
}

export default App;

