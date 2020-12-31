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
 * System:       Hive-customer-onboarding
 * Module Name:  router
 * Filename:     index.js
 * Language:     React.js
 *
 * History:
 * 2020-04-09   Creation of file
 *************************************************************  */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Overview from '../pages/landing-dashboard';
import { INDEX_ROUTE, LOGIN_ROUTE } from '../constants/routes';
import LoginPage from '../pages/un-authorized';
import AppHeader from '../components/Header';
import AppFooter from '../components/Footer';
import AuthenticatedRoute from '../router/authenticatedRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <AppHeader />
        <div className="main-content-wrapper">
          <AuthenticatedRoute path={INDEX_ROUTE} component={Overview} />
            <Route exact path={LOGIN_ROUTE} component={LoginPage} />
            </div>
        <AppFooter />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
