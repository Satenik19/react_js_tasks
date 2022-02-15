import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CHANGE_FAVORITE } from '../../app/cities/actions';

function CityItem({ city }) {
  // const [copyCity, setCopyCity] = useState({...city});
  const dispatch = useDispatch();
  const changeFavourite = () => {
    // setCopyCity({
    //     ...copyCity,
    //     isFavourite: !copyCity.isFavourite
    // });

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
        ></i>
      </p>
    </div>
  );
}

CityItem.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    isFavourite: PropTypes.bool,
  }),
};

export default CityItem;
