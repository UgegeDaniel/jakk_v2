const getToken = () => {
    if (!localStorage.getItem('user')) {
        return null;
    }

    return `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
}

export const getConfig = () => {
    const token = getToken();

    return {
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        }
    }
}

export const baseUrl = process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_REMOTE_API_URL
    : 'http://localhost:5000/api';
