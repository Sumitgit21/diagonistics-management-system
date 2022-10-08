import React, { useEffect, useState, Suspense, lazy } from "react";
import ErrorBoundary from "../components/errorBoundray/ErrorBoundray";
import { QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { ErrorFallback } from "../pages/error";

// import { ToastContainer, Zoom } from "react-toastify";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
// import Loadable from "react-loadable";
import { useDispatch, useSelector } from "react-redux";
// import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/PublicRoute";
// import { log } from "./common/common";
// import ShareRoute from "./components/ShareRoute";
// import GoogleAnalytics from "./components/googleAnalytics/GoogleAnalytics";

import Navbar from "../../app/components/shared/Navbar";
import Sidebar from "../../app/components/shared/Sidebar";
import Footer from "../../app/components/shared/Footer";

import Spinner from "../../app/components/shared/Spinner";
import packageJson from "../../../package.json";

const Login = lazy(() => import("../../app/pages/login/Login"));

export default function AppRoutes() {
  let navbarComponent = <Navbar />;
  let sidebarComponent = <Sidebar />;
  let footerComponent = <Footer />;
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <div className="App">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Spinner />}>
            <Router>
              {sidebarComponent}
              <div className="container-fluid page-body-wrapper">
                {navbarComponent}
                <div className="main-panel">
                  <div className="content-wrapper">
                    <Routes>
                      <Route path="/Login" index element={Login}></Route>
                      {/* <Route path="/" element={<div>hiiii</div>}></Route> */}
                    </Routes>
                  </div>
                </div>
              </div>
            </Router>
          </Suspense>
        </ErrorBoundary>
        {/* {!appConfig?.is_production_build && ( */}
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
        {/* )} */}

        {/* <ToastContainer
            position="bottom-center"
            transition={Zoom}
            autoClose={3000}
            closeOnClick
            rtl={false}
            pauseOnHover
            limit={1}
          /> */}
      </div>
      {/* // </QueryClientProvider> */}
    </>
  );
}
