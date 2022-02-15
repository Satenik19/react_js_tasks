import CityItem from './CityItem';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';

function CityList() {
  const cities = useSelector((state) => state.cities);

  return (
    <div>
      <h1>List of cities</h1>
      {cities.map((city, index) => {
        return <CityItem key={index} city={city} />;
      })}
    </div>
  );
}

export default CityList;
