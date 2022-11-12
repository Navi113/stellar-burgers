import React  from "react";
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header>
      <div>
      <BurgerIcon type="primary" />
        <p>Конструткор</p>
      </div>
      <div>
        <ListIcon type="primary" />
        <p>Лента заказов</p>
      </div>
      <Logo />
      <div>
        <ProfileIcon type="primary" />
        <p>Личный кабинет</p>
      </div>
    </header>
  )
} 

export default AppHeader