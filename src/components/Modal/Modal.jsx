import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "../Modal/Modal.module.css";
import { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const modalRoot = document.querySelector("#react-modals");

function Modal(props) {
  useEffect(() => {
    const closeOnEsc = (evt) => {
      evt.key === "Escape" && props.onClose();
    };

    document.addEventListener("keydown", closeOnEsc);

    return () => {
      document.removeEventListener("keydown", closeOnEsc);
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <ModalOverlay onClose={props.onClose} />
      <div className={styles.container}>
        <button onClick={props.onClose} className={styles.closeButton}>
          <CloseIcon />
        </button>
        {props.children}
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};
