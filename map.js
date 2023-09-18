// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import { Paper, Typography, useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab/Rating';
// import mapStyles from '../../mapStyles';
// import useStyles from './styles.js';
// const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
//   const matches = useMediaQuery('(min-width:600px)');
//   const classes = useStyles();
//   return (
//     <div className={classes.mapContainer}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: 'AIzaSyDKAIWbkM0JwPKv5CVcIvM_iYsj5c7XtMs' }}
//         // bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
//         defaultCenter={coords}
//         center={coords}
//         defaultZoom={14}
//         margin={[50, 50, 50, 50]}
//         options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
//         onChange={(e) => {
//           setCoords({ lat: e.center.lat, lng: e.center.lng });
//           setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
//         }}
//         onChildClick={(child) => setChildClicked(child)}
//       >
//         {places.length && places.map((place, i) => (
//           <div
//             className={classes.markerContainer}
//             lat={Number(place.latitude)}
//             lng={Number(place.longitude)}
//             key={i}
//           >
//             {!matches
//               ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
//               : (
//                 <Paper elevation={3} className={classes.paper}>
//                   <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
//                   <img
//                     className={classes.pointer}
//                     src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
//                   />
//                   <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
//                 </Paper>
//               )}
//           </div>
//         ))}
//         {weatherData?.list?.length && weatherData.list.map((data, i) => (
//           <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
//             <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
//           </div>
//         ))}
//       </GoogleMapReact>
//     </div>
//   );
// };
// export default Map;



// src/api/travelAdvisorAPI.js

// /* eslint-disable consistent-return */
// import axios from 'axios';

// export const getWeatherData = async (lat, lng) => {
//   try {
//     if (lat && lng) {
//       const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
//         params: { lat, lon: lng },
//         headers: {
//           'x-rapidapi-key': '199f63eb78msha96379ede787491p12e495jsn7190db0fda18',
//           'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//         },
//       });

//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getPlacesData = async (type, sw, ne) => {
//   try {
//     const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
// @@ -29,7 +11,7 @@ export const getPlacesData = async (type, sw, ne) => {
//         tr_latitude: ne.lat,
//       },
//       headers: {
//         'x-rapidapi-key': 'f81d5c7777msh2d926f7bd8e2c22p1af665jsn76a239cf9aaa',
//         'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
//         'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//       },
//     });
// @@ -39,3 +21,21 @@ export const getPlacesData = async (type, sw, ne) => {
//     console.log(error);
//   }
// };

// export const getWeatherData = async (lat, lng) => {
//   try {
//     if (lat && lng) {
//       const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
//         params: { lat, lon: lng },
//         headers: {
//           'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
//           'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//         },
//       });

//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };