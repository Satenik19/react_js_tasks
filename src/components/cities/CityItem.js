import React from 'react';
import PropTypes from 'prop-types';

function CityItem({ city }) {
  return (
    <div>
      <h1>{city.title}</h1>
    </div>
  );
}

CityItem.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
};

export default CityItem;
