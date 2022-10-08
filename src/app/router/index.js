import React from "react";
//router
import { Routes, Route } from "react-router";
//layoutpages
import Index from "../pages/index";
import Default from "../layouts/dashboard/default";
import Horizontal from "../layouts/dashboard/horizontal";
import Boxed from "../layouts/dashboard/boxed";
import DualHorizontal from "../layouts/dashboard/dual-horizontal";
import DualCompact from "../layouts/dashboard/dual-compact";
import BoxedFancy from "../layouts/dashboard/boxed-fancy";
import Simple from "../layouts/dashboard/simple";
import Error404 from "../pages/error/error404";
import SignIn from "../pages/auth/sign-in";

const IndexRouters = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Index/>}></Route>
        {/* <Route path="/dashboard" element={<Default/>}></Route>
        <Route path="/boxed" element={<Boxed/> }></Route>
        <Route path="/horizontal" element={<Horizontal/>}></Route>
        <Route path="/dual-horizontal" element={<DualHorizontal/> }></Route>
        <Route path="/dual-compact" element={DualCompact}></Route>
        <Route path="/boxedFancy" element={BoxedFancy }></Route>
        <Route path="/auth" element={Simple}></Route>
        <Route path="/errors" element={Simple}></Route>  */}
      </Routes>
  );
};

export default IndexRouters;
