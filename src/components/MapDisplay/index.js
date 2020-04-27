import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

const MapDisplay = props => {

  const { location } = props;
  const [center, setCenter] = useState(location);
  const zoom = 11;

  useEffect(() => {
      setCenter({
        lat: Number(location.lat),
        lng: Number(location.lon)
      });
      //console.log(location);
  }, [location]);

  return (
    <div className="map-overlay" style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDUmg9BnlG6D8_xj-krfVsq52nEkZrVSbE' }}
        defaultCenter={center}
        center={center}
        defaultZoom={zoom}
        zoom={zoom}
      >
      </GoogleMapReact>
    </div>
  )
}

export default MapDisplay
