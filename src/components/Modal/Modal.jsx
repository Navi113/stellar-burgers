import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {useEffect, useMemo} from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from '../Modal/Modal.module.css'

import ModalOverlay from '../ModalOverlay/ModalOverlay';


const modalRoot = document.querySelector('#react-modals');

function Modal({modalVisible, details}) {
  // const [modalVisible, modalSetVisible] = React.useState(modalVisible);

  // //1.Создание элемента(оболочки)
  // const element = useMemo(() => document.createElement('div'), []) //Используем useMemo что ьы элемент не пересоздавался при перерислвке компонента
  // //2.Монтирование элемента
  // React.useEffect(() => {
  //   modalRoot.appendChild(element)                        //Используем useEffect для монтирования элемента
  //   return () => {                                       //Демонтируем элемент при очистке сайд эффектов
  //     modalRoot.removeChild(element)
  //   }
  // })

  return ReactDOM.createPortal (
    (
      <>
        <div className={modalVisible ? styles.modalVisible : styles.modal}>
          <ModalOverlay />
            <div className={`${styles.container} pt-10 pr-10 pb-15 pl-10`}>
            <button className={`${styles.closeButton}`}>
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