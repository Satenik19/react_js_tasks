import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Item from './Item';

function Favourites() {
  const citiesList = useSelector((state) => state.cities);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCities(citiesList.filter((city) => city.isFavourite));
  }, []);

  return (
    <div>
      {!cities.length ? (
        <div>There are no favourite cities yet.</div>
      ) : (
        <>
          <h1>List of favourite cities</h1>
          <ul>
            {cities.map((city, index) => (
              <li key={index}>
                <Link to={`/weather/${city.title}`}>
                  <Item key={index} city={city} />
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Favourites;
