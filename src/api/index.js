import axios from 'axios';
import { baseUrl, getConfig } from './config';

const onSuccess = (responseData, navParams) => {
    (responseData && navParams) && navParams.navFunc(navParams.navPath)
    return { responseData, responseError: null };
}

const onFailure = (err) => {
    const error = err.response.data || err.message
    const responseError = error.msg || error.errors || error
    return { responseData: null, responseError }
}

export const axiosGetRequestHandler = async (reqParams) => {
    const { endpoint, extract, navParams } = reqParams;
    const config = getConfig();
    try {
        const { data } = await axios.get(`${baseUrl}${endpoint}`, config);
        const responseData = await data[extract];
        return onSuccess(responseData, navParams)
    } catch (err) {
        return onFailure()
    }
};

export const axiosPostRequestHandler = async (reqParams) => {
    const { endpoint, postBody, extract, navParams } = reqParams;
    const config = getConfig();
    try {
        const { data } = await axios.post(`${baseUrl}${endpoint}`, postBody, config);
        const responseData = extract === 'user' ? await data : await data[extract];
        return onSuccess(responseData, navParams);
    } catch (err) {
        return onFailure(err);
    }
};
