import React, { useEffect, useState } from 'react';
import PostLoggedIn from './PostLoggedIn';
import LoggedIn from './LoggedIn';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Map() {
  const mapStyles = {
    height: '100vh',
    width: '100%'
  };

  const defaultCenter = {
    lat: 40.7128,
    lng: -74.0060
  };

  const markers = [
    { id: 1, position: { lat: 40.7128, lng: -74.0060 }, title: 'New York' },
    { id: 2, position: { lat: 40.7041, lng: -74.0092 }, title: 'Statue of Liberty' },
    { id: 3, position: { lat: 40.7589, lng: -73.9851 }, title: 'Empire State Building' },
  ];

  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        error => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      <LoggedIn />
      <h1>Map</h1>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
          {markers.map(marker => (
            <Marker
              key={marker.id}
              position={marker.position}
              title={marker.title}
            />
          ))}
          {currentLocation && <Marker position={currentLocation} title="You are here" />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;