import PropTypes from "prop-types";
import styles from "../OrderDetails/OrderDetails.module.css";
import doneImage from "../../images/done.png";

function OrderDetails(props) {
  return (
    <section className={`${styles.section} mt-30 mb-30`}>
      <h3 className="text text_type_digits-large mb-8">{props.orderNum}</h3>
      <p className="text text_type_main-default mb-15">идентификатор заказа</p>
      <img src={doneImage} alt="Done" />
      <p className="text text_type_main-small mt-15 mb-2">
        Ваш заказ начали готовить
      </p>
      <p className={styles.paragraph}>
        Дождитесь готовности на орбитальнйо станции
      </p>
    </section>
  );
}

export default OrderDetails;

OrderDetails.propTypes = {
  orderNum: PropTypes.number,
};
