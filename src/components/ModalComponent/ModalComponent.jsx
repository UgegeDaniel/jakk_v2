import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BootstrapModal from 'react-bootstrap/Modal';

function ModalComponent({ children, openModalTxt, modalHeaderTxt, btnVariant, onBtnClick }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleBtnClick = () => {
        if (onBtnClick) {
            onBtnClick()
        }
        setShow(true);
    }
    return (
        <>
            <Button variant={btnVariant || "primary"} onClick={handleBtnClick}>
                {openModalTxt}
            </Button>

            <BootstrapModal
                show={show}
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
        </>
    );
}

export default ModalComponent;