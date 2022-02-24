import { Route } from 'react-router-dom';
import React from 'react';
import { routes } from '../../constants/routes';
import PrivateRoute from './Private';

const isAuthenticated = false;
const routeComponents = routes.map((route, index) => (
  <Route
    path={route.path}
    key={index}
    component={route.element}
    element={route.auth ? (
      <PrivateRoute isAuthenticated={isAuthenticated}>
        {route.component}
      </PrivateRoute>
        ) : route.component}
  >
    {route?.children?.map((child, index) => (
      <Route
        path={child.path}
        key={index}
        index={child.index}
        element={child.element}
      />
        ))}
  </Route>
));

export default routeComponents;
