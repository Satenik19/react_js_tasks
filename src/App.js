import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line import/extensions
import 'bootstrap/dist/js/bootstrap.js';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import { routes } from './constants/routes';
import PrivateRoute from './components/routes/Private';
import useAuth from './services/useAuth';
import PublicRoute from './components/routes/Public';

function App() {
    const isAuthenticated = useAuth();
    const routeComponents = routes.map((route, index) => (
      <Route
        path={route.path}
        key={index}
        component={route.element}
        element={route.auth ? (
          <PrivateRoute isAuthenticated={isAuthenticated}>
            {route.component}
          </PrivateRoute>
            )
            : (
              <PublicRoute isAuthenticated={isAuthenticated}>
                {route.component}
              </PublicRoute>
            )}
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

    return (
      <div className="App">
        <Routes>
          {routeComponents}
        </Routes>
        <ToastContainer />
      </div>
  );
}

export default App;
