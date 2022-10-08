import React from "react";
import { Routes, Route } from "react-router-dom";
// import "../pages/";
// auth
import ConfirmMail from "../pages/auth/confirm-mail";
import LockScreen from "../pages/auth/lock-screen";
import Recoverpw from "../pages/auth/recoverpw";
import SignIn from "../pages/auth/sign-in";
import SignUp from "../pages/auth/sign-up";
// errors
import Error404 from "../pages/error/error404";
import Error500 from "../pages/error/error500";
import Maintenance from "../pages/error/maintenance";

const SimpleRouter = () => {
  return (
    <>
      {/* <Routes> */}
      {/* auth */}
      <Route exact path="/auth/confirm-mail" element={<ConfirmMail />} />
      <Route exact path="/auth/lock-screen" element={<LockScreen />} />
      <Route exact path="/auth/recoverpw" element={<Recoverpw />} />
      <Route exact path="/auth/sign-in" element={<SignIn />} />
      <Route exact path="/auth/sign-up" element={<SignUp />} />
      {/* error */}
      <Route exact path="/errors/error404" element={<Error404 />} />
      <Route exact path="/errors/error500" element={<Error500 />} />
      <Route exact path="/errors/maintenance" element={<Maintenance />} />
      {/* </Routes> */}
    </>
  );
};

export default SimpleRouter;
