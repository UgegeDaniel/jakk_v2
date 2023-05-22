import axios, { AxiosResponse } from 'axios';
import { baseUrl, getConfig } from './config';
import { NavigateFunction } from 'react-router-dom';

export interface RequestParams {
  endpoint: string;
  postBody?: object;
  extract: string;
  navParams?: {
    navFunc: NavigateFunction;
    navPath: string;
  };
}

export interface SuccessResponse<T> {
  responseData: T;
  responseError: null;
}

export interface FailureResponse {
  responseData: null;
  responseError: string | object;
}

const onSuccess = <T>(
  responseData: T, 
  navParams?:{
        navFunc: NavigateFunction,
        navPath: string
    }
): SuccessResponse<T> => {
  if (responseData && navParams) {
    navParams.navFunc(navParams.navPath);
  }
  return { responseData, responseError: null };
};

const onFailure = (
  err: { 
    response: { 
      data: {
        msg?: string, 
        errors?: string[]
      }; 
    }; 
    message: string; 
  }
): FailureResponse => {
  const error = err.response?.data || err.message;
  const responseError = error.msg || error.errors || error;
  return { responseData: null, responseError };
};

export const axiosGetRequestHandler = async <T>(
  reqParams: RequestParams
): Promise<SuccessResponse<T> | FailureResponse> => {
  const { endpoint, extract, navParams } = reqParams;
  const config = getConfig();
  try {
    const { data }: AxiosResponse = await axios.get(`${baseUrl}${endpoint}`, config);
    const responseData = await data[extract];
    return onSuccess<T>(responseData, navParams);
  } catch (err) {
    return onFailure(err);
  }
};

export const axiosPostRequestHandler = async <T>(
  reqParams: RequestParams
): Promise<SuccessResponse<T> | FailureResponse> => {
  const { endpoint, postBody, extract, navParams } = reqParams;
  const config = getConfig();
  try {
    const { data }: AxiosResponse = await axios.post(`${baseUrl}${endpoint}`, postBody, config);
    const responseData = extract === 'user' ? await data : await data[extract];
    return onSuccess<T>(responseData, navParams);
  } catch (err) {
    return onFailure(err);
  }
};
