import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function HourlyWeather({ hours }) {
  const formatTime = (time) => {
    const times = time.split(' ');
    return times[1];
  };
  const [hoursData, setHoursData] = useState([...hours]);

  useEffect(() => {
    const newHours = hours.map((hour) => {
      return {
        ...hour,
        showWeather: false,
      };
    });
    setHoursData([...newHours]);
  }, [hours]);

  const showDetails = (index) => {
    const newHours = hours.map((hour, i) => {
      if (i === index) {
        return {
          ...hour,
          showWeather: true,
        };
      }
      return {
        ...hour,
        showWeather: false,
      };
    });
    setHoursData([...newHours]);
  };

  return (
    <>
      {hoursData.map(function (hour, index) {
        return (
          <div key={index}>
            {index % 3 === 0 ? (
              <div key={index}>
                <hr />
                <b
                  onClick={() => {
                    showDetails(index);
                  }}
                >
                  {formatTime(hour.time)}
                </b>
                {hour?.showWeather ? (
                  <div>
                    <div className="d-flex align-items-center">
                      <p>{hour?.condition?.text || ''}</p>
                      <p>
                        <img src={hour?.condition?.icon || ''} alt="NO IMAGE" />
                      </p>
                    </div>
                    <p>Temperature is: {hour?.temp_c || ''}&deg;C</p>
                    <p>
                      <span>Humidity is: </span>
                      {hour?.humidity || ''}
                    </p>
                    <p>
                      <span>Wind speed is: </span>
                      {hour?.wind_kph || ''} km per hour
                    </p>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
}

HourlyWeather.propTypes = {
  hours: PropTypes.array,
};

export default HourlyWeather;
