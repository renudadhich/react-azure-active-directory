import React from 'react';
import { Route } from 'react-router-dom';
import { withSubscriptionDetailsConnected } from '../subscription-details';
import { INDEX_ROUTE, LICENSE_ROUTE } from '../../constants/routes';
import LicenseDetails from '../../pages/license-details';
import './index.scss';

const LandingDashboard = () => {
  return (
    <div className="landing-dashboard-wrapper">
      <Route exact path={INDEX_ROUTE} component={withSubscriptionDetailsConnected} />
      <Route path={LICENSE_ROUTE} component={LicenseDetails} />
    </div>
  );
};
export default LandingDashboard;
