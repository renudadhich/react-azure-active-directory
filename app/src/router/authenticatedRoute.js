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
 * Filename:     AuthenticatedRoute.js
 * Language:     React.js
 *
 * History:
 * 2020-04-09   Creation of file
 *************************************************************  */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_ROUTE } from '../constants/routes';
import { connect } from 'react-redux';
const AuthenticatedRoute = (props) => {
  const { isAuthenticated } = props;

  console.log('isAuthenticated', isAuthenticated);
  if (!isAuthenticated) {
    const renderComponent = () => (
      <Redirect
        to={{
          pathname: LOGIN_ROUTE,
          state: {
            from: props.location,
          },
        }}
      />
    );

    return <Route {...props} component={renderComponent} render={undefined} />;
  }

  return <Route {...props} />;
};

AuthenticatedRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = ({ azureAD }) => {
  return {
    ...azureAD,
  };
};

export default connect(mapStateToProps)(AuthenticatedRoute);
