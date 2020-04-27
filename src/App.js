import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'

import SearchForm from './components/SearchForm'
import SingleWeatherDisplay from './components/SingleWeatherDisplay';
import MapDisplay from  './components/MapDisplay';

function App() {
  const [location, setLocation] = useState('Sydney');
  const [coords, setCoords] = useState({lon: 151.21, lat: -33.87});

  return (
    <div className="App">
      <Container>
        <Row className="midway">
          <Container>
            <Row className="cont-height">
              <Col xs={12} md={6}>
                <Jumbotron>
                  <h1>Weather Search</h1>
                  <SearchForm locSetter={setLocation} />
                </Jumbotron>
              </Col>
              <Col xs={12} md={6}>
                <SingleWeatherDisplay location={location} coordsSetter={setCoords} />
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
      <MapDisplay location={coords}/>
    </div>
  );
}

export default App;
