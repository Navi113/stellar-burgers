import React from 'react';

import styles from './App.module.css'

import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';




function App(props) {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients />
      </main>
    </>
  );
}

export default App;
