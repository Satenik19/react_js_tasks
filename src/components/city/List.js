import React from 'react';
import { useSelector } from 'react-redux';
import CityItem from './Item';

function CityList() {
  const cities = useSelector((state) => state.cities);

  return (
    <div>
      <h1>List of cities</h1>
      {cities.map((city, index) => <CityItem key={index} city={city} />)}
    </div>
  );
}

export default CityList;
