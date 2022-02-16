import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CHANGE_FAVORITE } from '../../app/city/actions';

function CityItem({ city }) {
  const dispatch = useDispatch();

  const changeFavourite = () => {
    dispatch({
      type: CHANGE_FAVORITE,
      payload: {
        id: city.id,
        favourite: !city.isFavourite,
      },
    });
  };

  return (
    <div className="d-flex align-items-center">
      <p>{city.title}</p>
      <p className="ps-2" onClick={changeFavourite}>
        <i
          className={city.isFavourite ? 'bi bi-heart-fill' : 'bi bi-heart'}
        />
      </p>
    </div>
  );
}

CityItem.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isFavourite: PropTypes.bool.isRequired,
  }),
};

export default CityItem;
