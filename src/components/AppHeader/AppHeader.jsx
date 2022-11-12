import React  from "react";

import styles from "./AppHeader.module.css";

import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header>
      <nav>
        <a href="#">
          <BurgerIcon type="primary" />
          <span className="ml-8">Конструткор</span>
        </a>
        <a href="#">
          <ListIcon type="primary" />
          <span className="ml-8">Лента заказов</span>
        </a>
        <Logo />
        <a href="#">
          <ProfileIcon type="primary" />
          <span className="ml-8">Личный кабинет</span>
        </a>
      </nav>
    </header>
  )
} 

export default AppHeader