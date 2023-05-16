import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setShowNotification } from '../../redux-toolkit/features/questionSlice';
import { FaTimes, FaCheck } from 'react-icons/fa';

function ToastNotification() {
    // const userNotifications = useSelector((state) => state.userState.notifications);
    const questionNotifications = useSelector((state) => state.questionState.notifications);

    const showNotification = useSelector((state) => state.questionState.showNotification)
    const dispatch = useDispatch();

    return (
        <ToastContainer
            className="p-3"
            position='top-end'
            style={{ zIndex: 10000 }}
        >
            {questionNotifications.map((notification, index) => {
                return notification.msg && (<Toast
                    key={index}
                    bg={`${notification.style}`}
                    delay={3000}
                    autohide
                    onClose={() => dispatch(setShowNotification(false))}
                    show={showNotification}
                >
                    <Toast.Header closeButton={false}>
                        {notification.style === 'danger'
                            ? <FaTimes className={`rounded me-2 text-${notification.style}`} />
                            : <FaCheck className={`rounded me-2 text-${notification.style}`} />
                        }
                        <strong className="me-auto">{notification.style === 'success' ? 'Success' : 'Error'}</strong>
                        <small>{notification.msg}</small>
                    </Toast.Header>
                </Toast>)
            })}
        </ToastContainer>
    )
}

export default ToastNotification;