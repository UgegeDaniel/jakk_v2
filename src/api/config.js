import { existingUser } from '../utils';

const token = existingUser && `Bearer ${existingUser.token}`;
const config = {
    headers: {
        "Content-Type": "application/json",
        Authorization: token
    }
};

export const baseUrl = process.env.NODE_ENV !== 'production'
    ? 'apis-production-57cb.up.railway.app/api'
    : 'http://localhost:5000/api';
export default config