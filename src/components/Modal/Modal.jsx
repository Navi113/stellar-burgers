import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {useEffect} from 'react';

import styles from '../Modal/Modal.module.css'

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ModalOverlay from '../ModalOverlay/ModalOverlay';

const modalRoot = document.querySelector('#react-modals');

function Modal(props) {
  return ReactDOM.createPortal (
    (
      <>
        <ModalOverlay />
        <div className={`${styles.container} pt-10 pr-10 pb-15 pl-10`}>
          <header className={`${styles.headerWrap} text text_type_main-large`}>
            <h2 className={styles.header}>{props.header}</h2>
            <button className={styles.closeButton}>
              <CloseIcon type="primary" />
            </button>
          </header>
          {props.children}
        </div>
      </>
    ), modalRoot
  );
}

export default Modal;