import PropTypes from "prop-types";
import styles from "../IngredientsDetails/IngredientsDetails.module.css";
import ingredientType from "../utils/types";

function IngredientsDetails(props) {
  return (
    <section className={`${styles.section} mt-10 mr-10 ml-10 mb-15`}>
      <h2 className="text text_type_main-large">Детали ингредиента</h2>
      <img className="mb-4" src={props.image} alt={props.name} />
      <h3 className="text text_type_main-medium mb-8">{props.name}</h3>
      <div className={styles.infoWrapper}>
        <div className={`${styles.info} mr-5`}>
          <span className="text_type_main-default  text_color_inactive mb-2">
            Калорий, ккал
          </span>
          <span className="text_type_digits-default text_color_inactive">
            {props.calories}
          </span>
        </div>
        <div className={`${styles.info} mr-5`}>
          <span className="text_type_main-default text_color_inactive mb-2">
            Белкти, г
          </span>
          <span className="text_type_digits-default text_color_inactive">
            {props.proteins}
          </span>
        </div>
        <div className={`${styles.info} mr-5`}>
          <span className="text_type_main-default text_color_inactive mb-2">
            Жиры, г
          </span>
          <span className="text_type_digits-default text_color_inactive">
            {props.fat}
          </span>
        </div>
        <div className={styles.info}>
          <span className="text_type_main-default text_color_inactive mb-2">
            Углеводы, г
          </span>
          <span className="text_type_digits-default text_color_inactive">
            {props.carbohydrates}
          </span>
        </div>
      </div>
    </section>
  );
}

export default IngredientsDetails;

// IngredientsDetails.propTypes=ingredientType;

IngredientsDetails.propTypes = {
  calories: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
};
