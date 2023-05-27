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

export type onSuccessFxnType = <T>(
  responseData: T,
  navParams?: {
    navFunc: NavigateFunction;
    navPath: string;
  },
) => SuccessResponse<T>;

export type onFailureType = (err: {
  response: {
    data: {
      msg?: string;
      errors?: string[];
    };
  };
  message: string;
}) => FailureResponse;

export type handlerType = <T>(
  reqParams: RequestParams,
) => Promise<SuccessResponse<T> | FailureResponse>;
