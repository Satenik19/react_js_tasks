import React from 'react';
import { Navigate } from 'react-router-dom';

// function PrivateRoute(props) {
//     const isLoggeIn = true;
//     return isLoggeIn ? <Route {...props} /> : <Navigate to="/login" />;
// }
// const isAuthenticated = false;
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ isAuthenticated, children }) => isAuthenticated ? children : <Navigate to="/login" />;

export default PrivateRoute;
