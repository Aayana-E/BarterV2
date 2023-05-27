import React, { memo, useCallback, useMemo, useState } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { CoordinateInterface } from "./locationsData";

const Map = ({ coordinates }) => {
  const memoCoordinates = useMemo(() => coordinates, []);

  //console.log(coordinates);
  const [map, setMap] = useState(null);
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
  });

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(memoCoordinates);
    // commented out because it zooms it in too far on first load.
    //map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="w-[400px] h-[400px]"
      zoom={15}
      center={memoCoordinates}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerF position={memoCoordinates} />
    </GoogleMap>
  ) : (
    <div>loading google map...</div>
  );
};

export default memo(Map);