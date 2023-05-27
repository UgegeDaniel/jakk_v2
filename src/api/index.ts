import axios, { AxiosResponse } from 'axios';
import { baseUrl, getConfig } from './config';
import {
  RequestParams,
  onSuccessFxnType,
  onFailureType,
  handlerType,
} from '../types/requestTypes';

const onSuccess: onSuccessFxnType = (responseData, navParams) => {
  if (responseData && navParams) {
    navParams.navFunc(navParams.navPath);
  }
  return { responseData, responseError: null };
};

const onFailure: onFailureType = (err) => {
  const error = err.response?.data || err.message;
  const responseError = error.msg || error.errors || error;
  return { responseData: null, responseError };
};

export const axiosGetRequestHandler: handlerType = async (
  reqParams: RequestParams,
) => {
  const { endpoint, extract, navParams } = reqParams;
  const config = getConfig();
  try {
    const { data }: AxiosResponse = await axios.get(
      `${baseUrl}${endpoint}`,
      config,
    );
    const responseData = await data[extract];
    return onSuccess(responseData, navParams);
  } catch (err) {
    return onFailure(err);
  }
};

export const axiosPostRequestHandler: handlerType = async (reqParams) => {
  const { endpoint, postBody, extract, navParams } = reqParams;
  const config = getConfig();
  try {
    const { data }: AxiosResponse = await axios.post(
      `${baseUrl}${endpoint}`,
      postBody,
      config,
    );
    const responseData = extract === 'user' ? await data : await data[extract];
    return onSuccess(responseData, navParams);
  } catch (err) {
    return onFailure(err);
  }
};
