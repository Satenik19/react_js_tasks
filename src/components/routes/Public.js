import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const isLoggedIn = true;

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ component: Component, isRestricted, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
            (isLoggedIn && isRestricted)
                ? <Navigate to="/welcome" />
                : <Component {...props} />
        )}
  />
    );
export default PublicRoute;
