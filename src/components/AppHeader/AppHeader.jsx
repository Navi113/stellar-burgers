import React  from 'react';

import styles from './AppHeader.module.css';

import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header className={`${styles.header} mt-10 mb-10`}>
      <nav className={`${styles.nav} pt-4 pb-4`}>
        <a href="#" className={`${styles.link} pt-4 pl-5 pb-4 pr-5 mr-2`}>
          <BurgerIcon type="primary" />
          <span className={`${styles.link_active} ml-2`}>Конструктор</span>
        </a>
        <a href="#" className={`${styles.link} pt-4 pl-5 pb-4 pr-5 mr-2`}>
          <ListIcon type="primary" />
          <span className={`${styles.link_text} ml-2`}>Лента заказов</span>
        </a>
        <a href="#" className={styles.logo}>
          <Logo />
        </a>
        <a href="#" className={`${styles.link} pt-4 pl-5 pb-4 pr-5 mr-2`}>
          <ProfileIcon type="primary" />
          <span className={`${styles.link_text} ml-2`}>Личный кабинет</span>
        </a>
      </nav>
    </header>
  )
} 

export default AppHeader