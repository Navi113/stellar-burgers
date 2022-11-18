import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from '../Modal/Modal.module.css'

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

const modalRoot = document.querySelector('#react-modals');

function Modal({modalVisible, setModalVisible, details}) {
  return ReactDOM.createPortal (
    (
      <>
        <div className={modalVisible ? styles.modalVisible : styles.modal}>
          <div onClick={() => { setModalVisible(false) }}> 
            <ModalOverlay />
          </div>
            <div className={styles.container}>
              <button className={styles.closeButton}>
                <CloseIcon onClick={() => { setModalVisible(false) }}/>
              </button>
              {details}
            </div>
          </div>
      </>
    ), modalRoot
  );
}

export default Modal;