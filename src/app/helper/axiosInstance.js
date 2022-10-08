import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import { getLocalStorage, setLocalStorage } from '../../common/common';
import packageJson from '../../../package.json';
import appConfig from '../../config/config';
import { onlineManager } from 'react-query';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
const baseURL = appConfig.apiLoc;
const apiVersion = packageJson.version;
let accessToken = getLocalStorage('accessToken', '') ? getLocalStorage('accessToken', '') : null;
let refreshToken = getLocalStorage('refreshToken', '') ? getLocalStorage('refreshToken', '') : null;
const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: getLocalStorage('accessToken', ''),
    version: `rjsw ${apiVersion}`
  }
});
const isOnline = onlineManager.isOnline();
axiosInstance.interceptors.request.use(
  async (req) => {
    if (!accessToken) {
      accessToken = getLocalStorage('accessToken', '') ? getLocalStorage('accessToken', '') : null;
      req.headers.Authorization = accessToken;
    }

    const access = jwt_decode(accessToken);
    const isExpired = dayjs.unix(access.exp).diff(dayjs()) < 1;
    // console.log('ONLINE STATE', isOnline);
    if (isOnline) {
      if (!isExpired) {
        accessToken = null;
        return req;
      } else {
        accessToken = null;
        try {
          const response = await axios.post(`${baseURL}Authrjs/getToken`, {
            token: getLocalStorage('refreshToken', '')
          });

          setLocalStorage('accessToken', response.data.data.token);
          req.headers.Authorization = response.data.data.token;
          return req;
        } catch (error) {
          try {
            const response = await axios.post(`${baseURL}Authrjs/getToken`, {
              token: getLocalStorage('refreshToken', '')
            });

            setLocalStorage('accessToken', response.data.data.token);
            req.headers.Authorization = response.data.data.token;
            return req;
          } catch (error) {
            try {
              const response = await axios.post(`${baseURL}Authrjs/getToken`, {
                token: getLocalStorage('refreshToken', '')
              });

              setLocalStorage('accessToken', response.data.data.token);
              req.headers.Authorization = response.data.data.token;
              return req;
            } catch (error) {
              return Promise.reject('loginAgain');
            }
          }
        }
      }
    } else {
      toast.error('Please make sure you have an active internet connection');
    }
  },
  async (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await axios.post(`${baseURL}Authrjs/getToken`, {
          token: getLocalStorage('refreshToken', '')
        });
        if (res.data.status_code == 200) {
          // 1) put token to LocalStorage
          setLocalStorage('accessToken', res.data.data.token);
          // 2) Change Authorization header
          originalRequest.headers.Authorization = res.data.data.token;
          // 3) return originalRequest object with Axios.
          return axios(originalRequest);
        }
      } catch (error) {
        try {
          const res = await axios.post(`${baseURL}Authrjs/getToken`, {
            token: getLocalStorage('refreshToken', '')
          });
          if (res.data.status_code == 200) {
            // 1) put token to LocalStorage
            setLocalStorage('accessToken', res.data.data.token);
            // 2) Change Authorization header
            originalRequest.headers.Authorization = res.data.data.token;
            // 3) return originalRequest object with Axios.
            return axios(originalRequest);
          }
        } catch (error) {
          try {
            const res = await axios.post(`${baseURL}Authrjs/getToken`, {
              token: getLocalStorage('refreshToken', '')
            });
            if (res.data.status_code == 200) {
              // 1) put token to LocalStorage
              setLocalStorage('accessToken', res.data.data.token);
              // 2) Change Authorization header
              originalRequest.headers.Authorization = res.data.data.token;
              // 3) return originalRequest object with Axios.
              return axios(originalRequest);
            }
          } catch (error) {
            return Promise.reject('loginAgain');
          }
        }
      }
    }

    // return Error object with Promise
    return Promise.reject(error);
  }
);
export default axiosInstance;
