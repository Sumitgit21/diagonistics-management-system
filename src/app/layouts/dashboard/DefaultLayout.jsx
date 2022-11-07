import React, { useEffect } from "react";
import { bindActionCreators } from "redux";

import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
//header
import Header from "../../components/partials/dashboard/HeaderStyle/header";
//subheader
import SubHeader from "../../components/partials/dashboard/HeaderStyle/sub-header";
//sidebar
import Sidebar from "../../components/partials/dashboard/SidebarStyle/sidebar";
//footer
import Footer from "../../components/partials/dashboard/FooterStyle/footer";
//default
import DefaultRouter from "../../router/default-router";

import SettingOffcanvas from "../../components/partials/components/settingoffcanvas";
import Loader from "../../components/Loader";

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
} from "../../store/setting/setting";
import { useSelector } from "react-redux";

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

const propTypes = {};

const defaultProps = {};

/**
 *
 */
const DefaultLayout = ({ children }) => {
  const dispatch = useDispatch();

  let darkMode = useSelector((state) => state.mode.scheme);
  let customizerMode = useSelector((state) => state.mode.colorcustomizer);
  let cololrinfomode = useSelector((state) => state.mode.colorinfo);
  let colorprimarymode = useSelector((state) => state.mode.colorprimary);
  useEffect(() => {
    //   darkmode
    const colorMode = sessionStorage.getItem("color-mode");
    if (colorMode === null) {
      dispatch(ModeAction(darkMode));
    } else {
      dispatch(ModeAction(colorMode));
    }

    // colocustomizermode
    const colorcustomizerMode = sessionStorage.getItem("color-customizer-mode");
    const colorcustomizerinfoMode = sessionStorage.getItem(
      "colorcustominfo-mode"
    );
    const colorcustomizerprimaryMode = sessionStorage.getItem(
      "colorcustomprimary-mode"
    );
    if (colorcustomizerMode === null) {
      dispatch(
        ColorCustomizerAction(customizerMode, cololrinfomode, colorprimarymode)
      );
      document.documentElement.style.setProperty("--bs-info", cololrinfomode);
    } else {
      dispatch(
        ColorCustomizerAction(
          colorcustomizerMode,
          colorcustomizerinfoMode,
          colorcustomizerprimaryMode
        )
      );
      document.documentElement.style.setProperty(
        "--bs-info",
        colorcustomizerinfoMode
      );
    }

    // // rtlmode
    // const rtlMode = sessionStorage.getItem("rtl-mode");
    // if (rtlMode === null) {
    //   props.SchemeDirAction(props.schemeDirMode);
    // } else {
    //   props.SchemeDirAction(rtlMode);
    // }
  });

  return (
    <>
      <Loader />
      <Sidebar />
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

DefaultLayout.propTypes = propTypes;
DefaultLayout.defaultProps = defaultProps;
// #endregion

export default DefaultLayout;
