import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './stylesheets/index.scss';
export const Unauthorized = (props) => {
  const { history, isAuthenticated } = props;

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);

  return (
    <div className="login-container">
      <div className="login-details">
        <div className="form-content">
          <div className="login-msg">
            you are not logged in !!
            <br /> Please login to access application.
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ azureAD }) => {
  return {
    ...azureAD,
  };
};

export default connect(mapStateToProps)(withRouter(Unauthorized));
