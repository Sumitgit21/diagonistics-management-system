// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Navigate, useLocation } from 'react-router-dom';
// import { getLocalStorage } from '../common/common';
// import { loginSuccess } from '../Store/actions/login.action';
// const PrivateRoute = ({ children }) => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (getLocalStorage('isLoggedIn', false)) {
//       dispatch(loginSuccess());
//     }
//   }, []);
//   console.log('===>>>LOCAL STORAGE LOGGED IN VALUE', getLocalStorage('isLoggedIn', false));
//   return getLocalStorage('isLoggedIn', false) ? (
//     children
//   ) : (
//     <Navigate to="/" state={{ from: location }} />
//   );
// };
// export default PrivateRoute;
