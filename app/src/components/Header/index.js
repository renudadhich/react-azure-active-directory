import React from 'react';
import Button from 'react-bootstrap/Button';
import './stylesheet/index.scss';
import { loginRequest } from '../../auth-config';
import { login, logout } from '../../utils/authentication';
import { connect } from 'react-redux';
import { toggleSidebarMenu } from '../../actions/sidebar';

export const AppHeader = (props) => {
  const { isAuthenticated, toggleSidebarMenu, isCollapsed } = props;

  const handleCollapse = () => {
    toggleSidebarMenu(!isCollapsed);
  };
  const handleOnHeaderTransition = (data) => {
    if (data.collapsed || data.compressed) {
      toggleSidebarMenu(true);
    }
  };
  return (
    // <Header
    //   title="Customer OnBoarding Portal"
    //   onMenuToggle={handleCollapse}
    //   onHeaderTransition={handleOnHeaderTransition}
    // >

    //   {!isAuthenticated && (
    //     <Button type="inline" content="Login" onClick={() => login(loginRequest, 'loginRedirect')} />
    //   )}
    // </Header>
    <div className="header-content">
      {!isAuthenticated && (
        <Button variant="primary" size="lg" onClick={() => login(loginRequest, 'loginRedirect')}>
          Login
        </Button>
      )}
      {isAuthenticated && (
        <Button variant="primary" size="lg" onClick={logout}>
          Logout
        </Button>
      )}
    </div>
  );
};
const mapStateToProps = ({ azureAD, SideBar }) => {
  return {
    ...azureAD,
    ...SideBar,
  };
};
const mapDispatchToProps = {
  toggleSidebarMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
