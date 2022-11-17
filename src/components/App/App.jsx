import React from 'react';

import styles from './App.module.css'

import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import IngredientsDetails from '../IngredientsDetails/IngredientsDetails';
import OrderDetails from '../OrderDetails/OrderDetails';

function App(props) {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
        <Modal header="Детали ингредиента">
         {/* <IngredientsDetails /> */}
         <OrderDetails />
        </Modal>
      </main>
    </>
  );
}

export default App;
