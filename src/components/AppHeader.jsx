import React  from "react";
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header>
      <div className="pl-20 pr-20">
      <BurgerIcon type="primary" />
        <p className="ml-8">Конструткор</p>
      </div>

      <div className="pl-20 pr-20">
        <ListIcon type="primary" />
        <p className="ml-8">Лента заказов</p>
      </div>

      <Logo />
      <div className="pl-20 pr-20">
        <ProfileIcon type="primary" />
        <p className="ml-8">Личный кабинет</p>
      </div>
    </header>
  )
} 

export default AppHeader