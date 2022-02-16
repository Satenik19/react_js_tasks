import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/index';
import { routes } from './constants/routes';

function App() {
    const routeComponents = routes.map((route, index) => (
      <Route
        path={route.path}
        key={index}
        component={route.element}
        element={route.component}
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
      <h1>Weather app</h1>
      <NavBar />
      <Routes>
        {routeComponents}
      </Routes>
    </div>
  );
}

export default App;
