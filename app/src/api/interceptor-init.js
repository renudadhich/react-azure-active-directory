/* *********************************************************
 *            COPYRIGHT (c) 2020
 *               HONEYWELL INC.,
 *           ALL RIGHTS RESERVED
 *
 * This software is a copyrighted work and/or information protected as a
 * trade secret. Legal rights of Honeywell Inc. in this software are distinct
 * from ownership of any medium in which the software is embodied.
 * Copyright or trade secret notices included must be reproduced in
 * any copies authorized by Honeywell Inc.
 * The information in this software is subject to change without notice and
 * should not be considered as a commitment by Honeywell Inc.
 ************************************************************  */
/* **********************************************************
 * System:       HiveCustomerOnBoardingPortal
 * Module Name:  api
 * Filename:     interceptor.js
 * Language:     React.js
 *
 * History:
 * 2020-11-27   Creation of file
 *************************************************************  */
import axios from 'axios';
import { getToken } from '../utils/authentication';
import { apiRequest } from '../auth-config';

const setupRequestInterceptor = () => {
  axios.interceptors.request.use(
    async (reqConfig) => {
      const token = await getToken(apiRequest, 'loginRedirect');
      const newConfig = reqConfig;
      if (token) {
        newConfig.headers.Authorization = `Bearer ${token}`;
      }

      return newConfig;
    },
    (err) => Promise.reject(err),
  );
};

const setupResponseInterceptor = (store) => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    },
  );
};

export const initRestAPI = () => {
  axios.create({ withCredentials: true });
  setupRequestInterceptor();
  setupResponseInterceptor();
};
