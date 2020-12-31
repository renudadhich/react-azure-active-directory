import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {logout } from '../../utils/authentication';


const AppSidebar = (props) => {
  const {  history } = props;
  const handleSideBarItemClick = (path) => {
    return () => {
      history.push(path);
    };
  };
  const handleonclick = () =>{
     logout();
  }
  return (
  <div> This is side bar</div>
  )}

const mapStateToProps = ({ SideBar,azureAD }) => {
  return {
    ...SideBar,
    ...azureAD
  };
};
export default connect(mapStateToProps)(withRouter(AppSidebar));
