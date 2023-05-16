import axios from 'axios';
import config, { baseUrl } from './config';

const axiosRequestHandler = async (reqParams) => {
    const { endpoint, postBody, extract, navParams } = reqParams;
    const url = `${baseUrl}${endpoint}`;
    try {
        const { data } = postBody ? await axios.post(url, postBody, config) : await axios.get(url, config);
        const responseData = extract === 'user' ? await data : await data[extract];
        navParams && navParams.navFunc(navParams.navPath)
        return { responseData, responseError: null };
    } catch (err) {
        const error = err.response.data || err.message
        const responseError = error.msg || error.errors || error
        return { responseData: null, responseError }
    }
};
export default axiosRequestHandler;