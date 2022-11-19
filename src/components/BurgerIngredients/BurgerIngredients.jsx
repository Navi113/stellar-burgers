import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsItem from '../BurgerIngredientsItem/BurgerIngredientsItem.jsx';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import Modal from '../Modal/Modal';
import IngredientsDetails from '../IngredientsDetails/IngredientsDetails';



function BurgerIngredients(props) {
  const [modalVisible, setModalVisible] = useState(false); // Состояние модального окна
  const [modalData, setModalData] = useState({image: "", fat: "", proteins: "", calories: "", carbohydrates: "", name: "", imageLarge: ""}); // Состояние окна (данные)
  const [buns, setBuns] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [mains, setMains] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const data = props.data; 

  const handlerOpenPopup = (value) => {
    setModalVisible(true)
    setModalData(value)
  };

  const handlerClosePopup = (value) => {
    setModalVisible(false)
  };

  // useEffect(() => {
  //   console.log(modalData)
  // }, [modalData])


  useEffect(() => {
    setIngredients(data)
  }, [data])


  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  useEffect(() => {
    const bunsArray = ingredients.filter(bun => { // Массив отфильтрованных булок
      if(bun.type === "bun") {
        return bun;
      }
    })

    const buns = bunsArray.map(x => <BurgerIngredient 
      onOpen={handlerOpenPopup} 
      image={x.image} 
      imageLarge={x.image_large}
      fat={x.fat} 
      proteins={x.proteins} 
      calories={x.calories} 
      carbohydrates={x.carbohydrates}
      value={x.price} 
      discription={x.name} 
      key={x._id}
    />);
    setBuns(buns);
  }, [ingredients])
  
  useEffect(() => {
    const sauceArray = ingredients.filter(sauce => { // Массив отфильтрованных соусов
      if(sauce.type === "sauce") {
        return sauce;
      }
    })
    const sauce = sauceArray.map(x => <BurgerIngredient 
      onOpen={handlerOpenPopup} 
      image={x.image} 
      imageLarge={x.image_large}
      fat={x.fat} 
      proteins={x.proteins} 
      calories={x.calories} 
      carbohydrates={x.carbohydrates}
      value={x.price} 
      discription={x.name} 
      key={x._id}
    />);
    setSauces(sauce);
  }, [ingredients])

  // useEffect(() => {
  //   console.log(sauces)
  // }, [sauces])

  useEffect(() => {
    const mainArray = ingredients.filter(main => {  // Массив отфильтрованных начинох
      if(main.type === "main") {
        return main;
      }
    })
    const main = mainArray.map(x => <BurgerIngredient
      onOpen={handlerOpenPopup} 
      image={x.image}
      imageLarge={x.image_large} 
      fat={x.fat} 
      proteins={x.proteins} 
      calories={x.calories} 
      carbohydrates={x.carbohydrates}
      value={x.price} 
      discription={x.name} 
      key={x._id}
    />);
    setMains(main);
  }, [ingredients])

  useEffect(() => {
    const closeOnEsc = (evt) => {
      evt.key === 'Escape' && handlerClosePopup();
    };

    document.addEventListener('keydown', closeOnEsc);

    return () => {
      document.removeEventListener('keydown', closeOnEsc);
    }
  }, []);

  return (
    <>
      <section className={`${styles.section} mr-10`}>
        <h1 className={`${styles.title} text text_type_main-large`}>
          Соберите бургер
        </h1>
        <div className={`${styles.tabs} mt-5`}>
          <Tab value="one" active={ true }>
            Булки
          </Tab>
          <Tab value="two">
            Соусы
          </Tab>
          <Tab value="three">
            Начинки
          </Tab>
        </div>
        <ul onClick={() => { setModalVisible(true) }} className={`${styles.ingridients} pl-4 pr-2 mt-10`}>
          <BurgerIngredientsItem title="Булки">
            {buns}
          </BurgerIngredientsItem>     
          <BurgerIngredientsItem title="Соусы">
            {sauces}
          </BurgerIngredientsItem>  
          <BurgerIngredientsItem title="Начинки">
            {mains}
          </BurgerIngredientsItem>
        </ul>
      </section>
      {modalVisible && (<Modal  onClose={handlerClosePopup} details={<IngredientsDetails 
        image={modalData.imageLarge}
        fat={modalData.fat}
        proteins={modalData.proteins}
        calories={modalData.calories}
        carbohydrates={modalData.carbohydrates}
        name={modalData.name} 
      />} />)} 
    </>
  );
}

export default BurgerIngredients;