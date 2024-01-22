
import React, { useState, useEffect } from 'react';
import MapSnapshot from './MapSnapshot';

const HomePage = () => {
  const [lat, setLat] = useState('35.110561');
  const [lng, setLng] = useState(-79.001708);
  const [showMap, setShowMap] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowMap(true);
    setInitialLoad(false); // Set initialLoad to false when "Show Map" is clicked
    // Additional validation needed
  };

  useEffect(() => {
    // Fetch initial map data or perform any other initialization logic here
    // For now, just setting showMap to true to render the map initially
    if (initialLoad) {
      setShowMap(true);
    }
  }, [initialLoad]);

  return (
    <div>
      <h1>Welcome to the Map Snapshot App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Latitude:
            <input
              type="number"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              disabled={showMap}
            />
          </label>
        </div>
        <div>
          <label>
            Longitude:
            <input
              type="number"
              value={lng}
              onChange={(e) => setLng(e.target.value)}
              disabled={showMap}
            />
          </label>
        </div>
        <button type="submit">Show Map</button>
      </form>
      {showMap && <MapSnapshot lat={lat} lng={lng} />}
    </div>
  );
};

export default HomePage;