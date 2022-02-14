import CityItem from './CityItem';
import React from 'react';
import { useSelector } from 'react-redux';

function CityList() {
  const cities = useSelector((state) => state.cities);

  return (
    <div>
      {cities.map((city) => {
        return <CityItem key={city.id} city={city} />;
      })}
    </div>
  );
}

export default CityList;
