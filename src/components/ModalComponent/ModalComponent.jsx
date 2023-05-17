import React from 'react';
import BootstrapModal from 'react-bootstrap/Modal';
import Btn from '../Btn/Btn'
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../redux-toolkit/features/questionSlice';

function ModalComponent(props) {
    const { children, openModalTxt, modalHeaderTxt, btnVariant, onBtnClick } = props
    const modal = useSelector((state)=> state.questionState.modal);
    const dispatch = useDispatch();

    const handleClose = () => dispatch(showModal(false));
    const handleBtnClick = () => {
        if (onBtnClick) {
            onBtnClick()
        }
        dispatch(showModal(true));
    }
    return (
        <React.Fragment>
            <Btn
                variant={btnVariant || "primary"}
                onClick={handleBtnClick}
                txt={openModalTxt}
            />

            <BootstrapModal
                show={modal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <BootstrapModal.Header closeButton>
                    <BootstrapModal.Title>{modalHeaderTxt}</BootstrapModal.Title>
                </BootstrapModal.Header>
                <BootstrapModal.Body>
                    {children}
                </BootstrapModal.Body>
            </BootstrapModal>
        </React.Fragment>
    );
}

export default ModalComponent;