import styles from './AppHeader.module.css';

import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header className={`${styles.header} mt-10 mb-10`}>
      <nav className={`${styles.nav} pt-4 pb-4`}>

        <a href="#" className={`${styles.link} pt-4 pl-5 pb-4 pr-5 mr-2`}>
          <BurgerIcon type="primary" />
          <span className="text text_type_main-default ml-2">Конструктор</span>
        </a>

        <a href="#" className={`${styles.link}  pt-4 pl-5 pb-4 pr-5 mr-2`}>
          <ListIcon type="secondary" />
          <span className="text text_type_main-default text_color_inactive ml-2">Лента заказов</span>
        </a>

        <a href="#" className={styles.logo}>
          <Logo />
        </a>
        
        <a href="#" className={`${styles.link} pt-4 pl-5 pb-4 pr-5 mr-2`}>
          <ProfileIcon type="secondary" />
          <span className="text text_type_main-default text_color_inactive ml-2">Личный кабинет</span>
        </a>

      </nav>
    </header>
  )
} 

export default AppHeader