import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BootstrapModal from 'react-bootstrap/Modal';

function Modal({ children }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Sign Up / Sign In
            </Button>

            <BootstrapModal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <BootstrapModal.Header closeButton>
                    <BootstrapModal.Title>Sign up</BootstrapModal.Title>
                </BootstrapModal.Header>
                <BootstrapModal.Body>
                    {children}
                </BootstrapModal.Body>
            </BootstrapModal>
        </>
    );
}

export default Modal;