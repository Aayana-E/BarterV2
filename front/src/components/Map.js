import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api';
import LoggedIn from './LoggedIn';


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
    { id: 2, position: { lat: 40.689247, lng: -74.044502 }, title: 'Statue of Liberty' },
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
     
      
      <LoadScript googleMapsApiKey="AIzaSyAEitHcEmeRYqt8JuON5u3vGup9haSaBqU">
        <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
          {markers.map(marker => (
            <MarkerF
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
