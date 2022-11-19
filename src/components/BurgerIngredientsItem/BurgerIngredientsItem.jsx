import PropTypes from 'prop-types';
import styles from "./BurgerIngredientsItem.module.css";

function BurgerIngredientsItem(props) {
  return (
    <li className={ styles.list_item }>
      <h2 className= "text text_type_main-medium">
        {props.title}
      </h2>
      <div className={`${styles.list_item_container} pl-4 pt-6`}>
        {props.children}
      </div>
    </li>
  );
}

export default BurgerIngredientsItem;

BurgerIngredientsItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
}