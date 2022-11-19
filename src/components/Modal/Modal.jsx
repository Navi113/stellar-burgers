import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from '../Modal/Modal.module.css'

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

const modalRoot = document.querySelector('#react-modals');

function Modal({details, onClose}) {
  return ReactDOM.createPortal (
    (
      <>
        <div>
          <div onClick={onClose}> 
            <ModalOverlay />
          </div>
            <div className={styles.container}>
              <button onClick={onClose} className={styles.closeButton}>
                <CloseIcon />
              </button>
              {details}
            </div>
          </div>
      </>
    ), modalRoot
  );
}

export default Modal;
