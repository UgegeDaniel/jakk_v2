import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BootstrapModal from 'react-bootstrap/Modal';
import Btn from '../Button/Button';
import { showModal } from '../../redux-toolkit/features/questionSlice';
import StateType from '../../types/stateTypes';
import { ModalProps } from '../../types/propTypes';

const Modal: React.FC<ModalProps> = (props) => {
  const { children, openModalTxt, modalHeaderTxt, btnVariant, onBtnClick } = props;
  const { isModal } = useSelector((state: StateType) => state);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(showModal(false));
  const handleBtnClick = () => {
    if (onBtnClick) {
      onBtnClick();
    }
    dispatch(showModal(true));
  };

  return (
    <React.Fragment>
      <Btn variant={btnVariant || 'primary'} onClick={handleBtnClick} txt={openModalTxt} />

      <BootstrapModal show={isModal} onHide={handleClose} backdrop="static" keyboard={false}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>{modalHeaderTxt}</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>{children}</BootstrapModal.Body>
      </BootstrapModal>
    </React.Fragment>
  );
};

export default Modal;
