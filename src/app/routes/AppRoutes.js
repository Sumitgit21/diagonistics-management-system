import React, { useEffect, useState, lazy } from "react";
import ErrorBoundary from "../components/errorBoundray/ErrorBoundray";
import { QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { ErrorFallback } from "../pages/error";

// import { ToastContainer, Zoom } from "react-toastify";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Loadable from "react-loadable";
import { useDispatch, useSelector } from "react-redux";
// import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/PublicRoute";
// import { log } from "./common/common";
// import ShareRoute from "./components/ShareRoute";
// import GoogleAnalytics from "./components/googleAnalytics/GoogleAnalytics";
import packageJson from "../../../package.json";

export default function AppRoutes() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <div className="App"> */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <Routes>
            <Route exact path="/" element={<div>hiiii</div>}></Route>
            <Route exact path="/Login" element={<div>hiii</div>}></Route>
          </Routes>
        </Router>
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
      {/* </div> */}
      {/* // </QueryClientProvider> */}
    </>
  );
}
