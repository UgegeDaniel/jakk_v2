import axios from 'axios';
import config, { baseUrl } from './config';

const axiosRequestHandler = async ({ endpoint, postBody, extract, navigate }) => {
    const url = `${baseUrl}${endpoint}`;
    try {
        const { data } = postBody ? await axios.post(url, postBody, config) : await axios.get(url, config);
        const responseData = extract === 'user' ? await data : await data[extract];
        console.log({responseData})
        const path = localStorage.getItem('path');
        navigate && navigate(path)
        return { responseData, responseError: null };
    } catch (err) {
        console.log(err)
        const error = err.response.data;
        const responseError = error.msg || error.errors || error
        console.log({responseError})
        return { responseData: null, responseError }
    }
};
export default axiosRequestHandler;