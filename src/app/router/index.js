import React from "react";
//router
import { Routes, Route } from "react-router";
//layoutpages
import Index from "../pages/index";

import Dashboard from "../pages/dashboard/Dashboard";
import Error404 from "../pages/error/error404";
import SignIn from "../pages/auth/sign-in";
import RoleManagement from "../pages/role-management/RoleManagement";
import EmployeeManagement from "../pages/employee/EmployeeManagement";
import ClientManagement from "../pages/client/ClientManagement";

const IndexRouters = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Index />}></Route>
      <Route path='/signin' element={<SignIn />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/role-management' element={<RoleManagement />}></Route>
      <Route
        path='/employee-management'
        element={<EmployeeManagement />}
      ></Route>
      <Route path='/client-management' element={<ClientManagement />}></Route>
      <Route path='*' element={<Error404 />}></Route>
    </Routes>
  );
};

export default IndexRouters;
