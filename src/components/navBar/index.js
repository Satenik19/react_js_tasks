import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function NavBar() {
  const { pathname } = useLocation();

  const currentRoute = pathname.split('/')[1];
  const param = pathname.split('/')[2] ? pathname.split('/')[2] : null;

  return (
    <>
      <ul className="App-header list-group d-flex flex-row">
        <li
          className={
            currentRoute === 'weather' && param === 'Yerevan'
              ? 'active list-group'
              : 'list-group'
          }
        >
          <Link to="/weather/Yerevan">Current city weather</Link>
        </li>
        <li
          className={
            currentRoute === 'cities' ? 'active list-group' : 'list-group'
          }
        >
          <Link to="/cities">Cities</Link>
        </li>
        <li
          className={
            currentRoute === 'favourites' ? 'active list-group' : 'list-group'
          }
        >
          <Link to="/favourites">Favourites</Link>
        </li>
        <li
          className={
            currentRoute === 'daily' ? 'active list-group' : 'list-group'
          }
        >
          <Link to="/daily">Daily weather</Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
