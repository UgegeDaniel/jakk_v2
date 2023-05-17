const token = JSON.parse(localStorage.getItem('user'))
    && `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
const config = {
    headers: {
        "Content-Type": "application/json",
        Authorization: token
    }
};

export const baseUrl = process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_REMOTE_API_URL
    : 'http://localhost:5000/api';
export default config