import React from "react";
import { Switch, Route } from "react-router-dom";
import "../pages/";
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
      <Switch>
        {/* auth */}
        <Route exact path="/auth/confirm-mail" component={ConfirmMail} />
        <Route exact path="/auth/lock-screen" component={LockScreen} />
        <Route exact path="/auth/recoverpw" component={Recoverpw} />
        <Route exact path="/auth/sign-in" component={SignIn} />
        <Route exact path="/auth/sign-up" component={SignUp} />
        {/* error */}
        <Route exact path="/errors/error404" component={Error404} />
        <Route exact path="/errors/error500" component={Error500} />
        <Route exact path="/errors/maintenance" component={Maintenance} />
      </Switch>
    </>
  );
};

export default SimpleRouter;
