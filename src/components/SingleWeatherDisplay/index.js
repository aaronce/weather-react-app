import React, { useEffect } from 'react'
import { useOpenWeatherMapAPI } from "@jakubzet/use-openweathermap-api";
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';


const SingleWeatherDisplay = props => {
  const {
    location,
    coordsSetter
  } = props;

  const [weather, fetchWeather] = useOpenWeatherMapAPI({
    key: "82f64da34251b0e58e057d344f3307a1",
    queryConfig: {
      cityName: location,
      //countryCode: "au"
    },
    queryType: "name",
    units: "metric"
  });

  useEffect(() => {
    if (location) {
      fetchWeather();
    }

    if (weather.data) {
      coordsSetter(weather.data.coord);
    }
  }, [location]);

  return (
    <div className="cont-height">
      {weather.pending && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}

      {weather.data && weather.data.name && weather.data.main && (
        <>
          <h4>Weather in {weather.data.name}</h4>
          <ListGroup>
            <ListGroup.Item>Currently: {weather.data.main.temp} degrees</ListGroup.Item>
            <ListGroup.Item>Max: {weather.data.main.temp_max} degrees</ListGroup.Item>
            <ListGroup.Item>in: {weather.data.main.temp_min} degrees</ListGroup.Item>
          </ListGroup>
        </>
      )}
    </div>
  )
}

export default SingleWeatherDisplay
