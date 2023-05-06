import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setShowNotification } from '../../redux-toolkit/features/userSlice';
import { FaTimes, FaCheck } from 'react-icons/fa';

function ToastNotification() {
    const notifications = useSelector((state) => state.userState.notifications)
    const showNotification = useSelector((state) => state.userState.showNotification)
    const dispatch = useDispatch();
    return (
        <ToastContainer
            className="p-3"
            position='top-end'
            style={{ zIndex: 10000 }}
        >
            {notifications.length > 0 && notifications.map((notification, index) => {
                return notification.msg && (<Toast
                    key={index}
                    bg={`${notification.style}`}
                    delay={3000}
                    autohide
                    onClose={() => dispatch(setShowNotification(false))} show={showNotification}
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