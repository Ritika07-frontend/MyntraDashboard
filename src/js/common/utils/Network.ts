import axios from "axios";
import store from "./../../store";
import { addRequest } from "./networkActions";
import { attachInterceptor } from "./tokenHandler";
import { ActionType } from "../resources/redux/types";

/* Input
    
        method: 'post',
        url: '/user/12345',
        data: {
            firstName: 'Fred',
            lastName: 'Flintstone'
        }
    }

    check axios documentation for more options
*/

export interface NetworkParam {
  url: string;
  method: string;
  data?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  headers?: any; // eslint-disable-line @typescript-eslint/no-explicit-any,
  cancelToken?: any;
}

export interface NetworkRequestConfig {
  cancelPrevious?: boolean;
  requestType?: string;
}

export interface NetworkSuccessResponse {
  data: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  status: number;
  statusText: string;
}

export interface NetworkErrorResponse {
  message: any; // eslint-disable-line @typescript-eslint/no-explicit-any,
  code?: string;
  status?: number;
}

localStorage.setItem('token', "null");


const token: string | null = localStorage.getItem('token');

// axios instance
const networkInstance = axios.create({
  baseURL: '',
  timeout: 30000,
  headers: {
    Authorization: token,
    'x-sc-identity': 'external'
  }
});

export default async function xhttp(
  input: NetworkParam,
  config?: NetworkRequestConfig
): Promise<NetworkSuccessResponse | NetworkErrorResponse> {
  try {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    if (config && config.cancelPrevious) {
      input.cancelToken = source.token;

      // remove previous from network store
      const storeState = store.getState();
      if (storeState && "network" in storeState) {
        const networkState = storeState.network;

        // cancel previous
        if (config.requestType && networkState.hasOwnProperty(config.requestType)) {
          try {
            networkState[config.requestType].cancel();
          } catch (e) {
            console.log(e);
          }
        }
      }

      // add current to network store
      store.dispatch(addRequest({
        key: config.requestType || JSON.stringify(input),
        source
      }) as unknown as ActionType)
    }

    // error and refresh token handling
    attachInterceptor(networkInstance);

    const resp = await networkInstance(input);
    console.log("pp", resp)

    const response: NetworkSuccessResponse = {
      data: resp.data,
      status: resp.status,
      statusText: resp.statusText
    };

    return response;
  } catch (e) {
    // console.log(e.response.data)
    const error: NetworkErrorResponse = e.response.data

    // console.log(error);

    // code
    if (e.code) {
      error.code = e.code;
    }

    if (e.status) {
      error.status = e.status;
    }

    return error;
  }
}
