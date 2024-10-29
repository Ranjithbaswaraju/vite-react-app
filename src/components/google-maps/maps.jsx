// import { Room } from '@mui/icons-material';
// import React, { useState } from 'react';
// import ReactMapGL, { Marker } from 'react-map-gl';
// import "mapbox-gl/dist/mapbox-gl.css"

// // const TOKEN= process.env.REACT_APP_TOKEN
// // console.log(TOKEN)

// function GoogleMap() {
//   const [newPlace, setNewPlace] = useState(null);
//   const [viewPort, setViewPort] = useState({
//     longitude: 28.6448,
//     latitude: 77.216,
//     zoom: 6
//   });

//   const handleClick = (e) => {
//     console.log("newPlace")
//     const [longitude, latitude] = e.lngLat;
//     setNewPlace({
//       lat: latitude,
//       long: longitude
//     });
//     console.log("Clicked location:", { latitude, longitude }); // Log clicked location
//   };

//   return (
//     <div style={{ width: '100vw', height: '100vh',zIndex:999 }}>
//       <ReactMapGL
//         {...viewPort}
//         onMove={(evt) => setViewPort(evt.viewPort)}  // Correct onMove handling
//         mapStyle="mapbox://styles/ranjith-321/cm2024vt9000h01o1h4fnhf9o"  // Check if the style URL is correct
//         mapboxAccessToken="pk.eyJ1IjoicmFuaml0aC0zMjEiLCJhIjoiY20yMDB5dGo5MGJ0MzJpc2Nwb2JtOGZ3cSJ9.Wy9tA4LnlIwIPknYD271hw"
//         width="100%"
//         height="100%"
//         transitionDuration="200"


//         onViewportChange={(viewPort)=>setViewPort(viewPort)}
//         onDblClick={handleClick}
//       >
//     {newPlace ? (
//       <>
//       <Marker
//       latitude={newPlace?.lat}
//       longitude={newPlace?.long}

//       offsetLeft={-3.5*viewPort.zoom}
//       offsetTop={-7*viewPort.zoom}

     
      
//       >
//         <Room
//         style={{fontSize:7*viewPort.zoom,
//           color:'red',
//           cursor:'pointer'
//         }}
//         />

//       </Marker>
//       </>
//     ):null}
       
//       </ReactMapGL>
//     </div>
//   );
// }

// export default GoogleMap;


// import React, { useState } from 'react';
// import ReactMapGL, { Marker } from 'react-map-gl';
// import { Room } from '@mui/icons-material';
// import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
// import "mapbox-gl/dist/mapbox-gl.css";

// // Initialize the Mapbox Geocoding service
// const geocodingClient = mbxGeocoding({
//   accessToken: 'pk.eyJ1IjoicmFuaml0aC0zMjEiLCJhIjoiY20yMDB5dGo5MGJ0MzJpc2Nwb2JtOGZ3cSJ9.Wy9tA4LnlIwIPknYD271hw'
// });

// function GoogleMap() {
//   const [fromLocation, setFromLocation] = useState(null); // "From" location marker
//   const [toLocation, setToLocation] = useState(null);     // "To" location marker
//   const [viewPort, setViewPort] = useState({
//     longitude: 77.216721,
//     latitude: 28.6448,
//     zoom: 6,
//     width: '100%',
//     height: '100%'
//   });

//   const [fromSearch, setFromSearch] = useState('');
//   const [toSearch, setToSearch] = useState('');

//   // Function to geocode "From" location
//   const handleFromSearch = async () => {
//     try {
//       const response = await geocodingClient
//         .forwardGeocode({
//           query: fromSearch,
//           limit: 1
//         })
//         .send();

//       if (response.body.features.length > 0) {
//         const feature = response.body.features[0];
//         setFromLocation({
//           lat: feature.center[1],
//           long: feature.center[0]
//         });
//         setViewPort({
//           ...viewPort,
//           latitude: feature.center[1],
//           longitude: feature.center[0],
//           zoom: 10
//         });
//       }
//     } catch (error) {
//       console.error('Error with From geocoding:', error);
//     }
//   };

//   // Function to geocode "To" location
//   const handleToSearch = async () => {
//     try {
//       const response = await geocodingClient
//         .forwardGeocode({
//           query: toSearch,
//           limit: 1
//         })
//         .send();

//       if (response.body.features.length > 0) {
//         const feature = response.body.features[0];
//         setToLocation({
//           lat: feature.center[1],
//           long: feature.center[0]
//         });
//         setViewPort({
//           ...viewPort,
//           latitude: feature.center[1],
//           longitude: feature.center[0],
//           zoom: 10
//         });
//       }
//     } catch (error) {
//       console.error('Error with To geocoding:', error);
//     }
//   };

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       {/* Input fields for location search */}
//       <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1, backgroundColor: 'white', padding: 10, borderRadius: 8 }}>
//         <h4>Search Locations:</h4>
//         <div>
//           <label>From: </label>
//           <input
//             type="text"
//             value={fromSearch}
//             placeholder="Search 'From' location"
//             onChange={(e) => setFromSearch(e.target.value)}
//           />
//           <button onClick={handleFromSearch}>Search</button>
//         </div>
//         <div>
//           <label>To: </label>
//           <input
//             type="text"
//             value={toSearch}
//             placeholder="Search 'To' location"
//             onChange={(e) => setToSearch(e.target.value)}
//           />
//           <button onClick={handleToSearch}>Search</button>
//         </div>
//       </div>

//       {/* Map Display */}
//       <ReactMapGL
//         {...viewPort}
//         mapStyle="mapbox://styles/ranjith-321/cm2024vt9000h01o1h4fnhf9o"  // Ensure your Mapbox style URL is valid
//         mapboxAccessToken="pk.eyJ1IjoicmFuaml0aC0zMjEiLCJhIjoiY20yMDB5dGo5MGJ0MzJpc2Nwb2JtOGZ3cSJ9.Wy9tA4LnlIwIPknYD271hw"
//         onMove={(evt) => setViewPort(evt.viewPort)}
//       >
//         {/* Marker for "From" location */}
//         {fromLocation && (
//           <Marker
//             latitude={fromLocation.lat}
//             longitude={fromLocation.long}
//             offsetLeft={-20}
//             offsetTop={-10}
//           >
//             <Room style={{ color: 'green', fontSize: 24 }} />
//           </Marker>
//         )}

//         {/* Marker for "To" location */}
//         {toLocation && (
//           <Marker
//             latitude={toLocation.lat}
//             longitude={toLocation.long}
//             offsetLeft={-20}
//             offsetTop={-10}
//           >
//             <Room style={{ color: 'blue', fontSize: 24 }} />
//           </Marker>
//         )}
//       </ReactMapGL>
//     </div>
//   );
// }

// export default GoogleMap;

import React, { useState } from 'react';
import ReactMapGL, { Marker, Source, Layer } from 'react-map-gl';
import { Room } from '@mui/icons-material';
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
import mbxDirections from '@mapbox/mapbox-sdk/services/directions';
import "mapbox-gl/dist/mapbox-gl.css";

// Initialize the Mapbox Geocoding and Directions services
const geocodingClient = mbxGeocoding({
  accessToken: 'pk.eyJ1IjoicmFuaml0aC0zMjEiLCJhIjoiY20yMDB5dGo5MGJ0MzJpc2Nwb2JtOGZ3cSJ9.Wy9tA4LnlIwIPknYD271hw'
});

const directionsClient = mbxDirections({
  accessToken: 'pk.eyJ1IjoicmFuaml0aC0zMjEiLCJhIjoiY20yMDB5dGo5MGJ0MzJpc2Nwb2JtOGZ3cSJ9.Wy9tA4LnlIwIPknYD271hw'
});

function GoogleMap() {
  const [fromLocation, setFromLocation] = useState(null); // "From" location marker
  const [toLocation, setToLocation] = useState(null);     // "To" location marker
  const [routeData, setRouteData] = useState(null);       // Route data for the line
  const [viewPort, setViewPort] = useState({
    longitude: 77.216721,
    latitude: 28.6448,
    zoom: 3.5,
    width: '100%',
    height: '100%'
  });

  const [fromSearch, setFromSearch] = useState('');
  const [toSearch, setToSearch] = useState('');

  // Function to search both locations and fetch route
  const handleSearch = async () => {
    try {
      // Geocode "From" location
      const fromResponse = await geocodingClient
        .forwardGeocode({
          query: fromSearch,
          limit: 1
        })
        .send();

      let fromCoords;
      if (fromResponse.body.features.length > 0) {
        const fromFeature = fromResponse.body.features[0];
        fromCoords = {
          lat: fromFeature.center[1],
          long: fromFeature.center[0]
        };
        setFromLocation(fromCoords);
      }

      // Geocode "To" location
      const toResponse = await geocodingClient
        .forwardGeocode({
          query: toSearch,
          limit: 1
        })
        .send();

      let toCoords;
      if (toResponse.body.features.length > 0) {
        const toFeature = toResponse.body.features[0];
        toCoords = {
          lat: toFeature.center[1],
          long: toFeature.center[0]
        };
        setToLocation(toCoords);
      }

      // Update the map viewport to focus on the "To" location
      if (toCoords) {
        setViewPort({
          ...viewPort,
          latitude: toCoords.lat,
          longitude: toCoords.long,
          zoom: 10
        });
      }

      // If both "From" and "To" locations are set, fetch the route
      if (fromCoords && toCoords) {
        await fetchRoute(fromCoords, toCoords);
      }
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  // Function to fetch the route between "From" and "To" locations
  const fetchRoute = async (fromCoords, toCoords) => {
    try {
      const response = await directionsClient
        .getDirections({
          waypoints: [
            { coordinates: [fromCoords.long, fromCoords.lat] },
            { coordinates: [toCoords.long, toCoords.lat] }
          ],
          profile: 'driving', // can be 'walking', 'cycling', or 'driving'
          geometries: 'geojson'
        })
        .send();

      if (response.body.routes.length > 0) {
        const route = response.body.routes[0].geometry;
        setRouteData(route); // Set route GeoJSON data
      }
    } catch (error) {
      console.error('Error fetching the route:', error);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {/* Input fields for location search */}
      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1, backgroundColor: 'white', padding: 10, borderRadius: 8 }}>
        <h4>Search Locations:</h4>
        <div>
          <label>From: </label>
          <input
            type="text"
            value={fromSearch}
            placeholder="Search 'From' location"
            onChange={(e) => setFromSearch(e.target.value)}
          />
        </div>
        <div>
          <label>To: </label>
          <input
            type="text"
            value={toSearch}
            placeholder="Search 'To' location"
            onChange={(e) => setToSearch(e.target.value)}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Map Display */}
      <ReactMapGL
        {...viewPort}
        mapStyle="mapbox://styles/ranjith-321/cm2024vt9000h01o1h4fnhf9o"
        mapboxAccessToken="pk.eyJ1IjoicmFuaml0aC0zMjEiLCJhIjoiY20yMDB5dGo5MGJ0MzJpc2Nwb2JtOGZ3cSJ9.Wy9tA4LnlIwIPknYD271hw"
        onMove={(evt) => setViewPort(evt.viewPort)}
      >
        {/* Marker for "From" location */}
        {fromLocation && (
          <Marker
            latitude={fromLocation.lat}
            longitude={fromLocation.long}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Room style={{ color: 'green', fontSize: 24 }} />
          </Marker>
        )}

        {/* Marker for "To" location */}
        {toLocation && (
          <Marker
            latitude={toLocation.lat}
            longitude={toLocation.long}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Room style={{ color: 'blue', fontSize: 24 }} />
          </Marker>
        )}

        {/* Route Layer */}
        {routeData && (
          <Source id="route" type="geojson" data={routeData}>
            <Layer
              id="route-layer"
              type="line"
              source="route"
              layout={{ 'line-join': 'round', 'line-cap': 'round' }}
              paint={{
                'line-color': 'red',
                'line-width': 4
              }}
            />
          </Source>
        )}
      </ReactMapGL>
    </div>
  );
}

export default GoogleMap;
