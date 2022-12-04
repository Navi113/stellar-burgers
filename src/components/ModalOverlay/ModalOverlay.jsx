import PropTypes from "prop-types";
import styles from "../ModalOverlay/ModalOverlay.module.css";

function ModalOverlay(props) {
  return <div className={styles.overlay} onClick={props.onClose}></div>;
}

export default ModalOverlay;

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};

