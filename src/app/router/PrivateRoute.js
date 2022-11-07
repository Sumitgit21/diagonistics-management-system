import React, { useEffect } from "react";
import { bindActionCreators } from "redux";

import { Button } from "react-bootstrap";
//header
import Header from "../components/partials/dashboard/HeaderStyle/header";
//subheader
import SubHeader from "../components/partials/dashboard/HeaderStyle/sub-header";
//sidebar
import Sidebar from "../components/partials/dashboard/SidebarStyle/sidebar";
//footer
import Footer from "../components/partials/dashboard/FooterStyle/footer";
//default
import DefaultRouter from "../router/default-router";

import SettingOffcanvas from "../components/partials/components/settingoffcanvas";
import Loader from "../components/Loader";

// store
import {
  NavbarstyleAction,
  getDirMode,
  getcustomizerMode,
  getcustomizerprimaryMode,
  getcustomizerinfoMode,
  SchemeDirAction,
  ColorCustomizerAction,
  getNavbarStyleMode,
  getSidebarActiveMode,
  SidebarActiveStyleAction,
  getDarkMode,
  ModeAction,
  SidebarColorAction,
  getSidebarColorMode,
  getSidebarTypeMode,
} from "../store/setting/setting";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    darkMode: getDarkMode(state),
    customizerMode: getcustomizerMode(state),
    cololrinfomode: getcustomizerinfoMode(state),
    colorprimarymode: getcustomizerprimaryMode(state),
    schemeDirMode: getDirMode(state),
    sidebarcolorMode: getSidebarColorMode(state),
    sidebarTypeMode: getSidebarTypeMode(state),
    sidebaractivestyleMode: getSidebarActiveMode(state),
    navbarstylemode: getNavbarStyleMode(state),
  };
};
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ModeAction,
      SchemeDirAction,
      SidebarColorAction,
      SidebarActiveStyleAction,
      NavbarstyleAction,
      ColorCustomizerAction,
    },
    dispatch
  ),
});

const PrivateRoute = ({ children }) => {
  return (
    <>
      <Loader />
      {/* <Sidebar /> */}
      <main className='main-content'>
        <div className='position-relative'>
          <Header />
          <SubHeader />
        </div>
        <div className='py-0 conatiner-fluid content-inner mt-n5'>
          {children}
        </div>

        <Footer />
      </main>
      <SettingOffcanvas />
    </>
  );
};

PrivateRoute.propTypes = propTypes;
PrivateRoute.defaultProps = defaultProps;
// #endregion

export default PrivateRoute;
