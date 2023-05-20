import React from 'react';
import BootstrapModal from 'react-bootstrap/Modal';
import Btn from '../Btn/Btn';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../redux-toolkit/features/questionSlice';
import StateType from '../../types/stateTypes';

interface ModalComponentProps {
  children: React.ReactNode;
  openModalTxt: string;
  modalHeaderTxt: string;
  btnVariant?: string;
  onBtnClick?: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = (props) => {
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
    <>
      <Btn variant={btnVariant || 'primary'} onClick={handleBtnClick} txt={openModalTxt} />

      <BootstrapModal show={isModal} onHide={handleClose} backdrop="static" keyboard={false}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>{modalHeaderTxt}</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>{children}</BootstrapModal.Body>
      </BootstrapModal>
    </>
  );
};

export default ModalComponent;
