import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useSelector } from 'react-redux';

function ErrorToast() {
    const errors = useSelector((state) => state.userState.errors)

    return (
        <ToastContainer
            className="p-3"
            position='top-end'
            style={{ zIndex: 1 }}

        >
            {errors.length > 0 && errors.map((errorMsg, index) => (
                <Toast key={index} bg="danger">
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">Error</strong>
                        <small>{errorMsg}</small>
                    </Toast.Header>
                </Toast>
            ))}
        </ToastContainer>
    )
}

export default ErrorToast;