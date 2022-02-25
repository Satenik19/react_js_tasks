import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import routeComponents from './components/routes/List';
import { ToastContainer } from 'react-toastify';
import { routes } from './constants/routes';
import PrivateRoute from './components/routes/Private';
import useAuth from './services/auth';

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
