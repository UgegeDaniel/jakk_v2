import { existingUser } from '../utils';

const token = existingUser && `Bearer ${existingUser.token}`;
const config = {
    headers: {
        "Content-Type": "application/json",
        Authorization: token
    }
};
export const baseUrl = 'http://localhost:5000/api';

export default config