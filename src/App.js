import { CssBaseline, Grid } from '@mui/material'
import { List, Header, Map } from './components';
import { getPlaces } from './api';
import { useEffect, useState } from 'react';



function App() {

  const [places, setPlaces] = useState([]);
  const [childClick, setChildClick] = useState(null);

  const [ type, setType ] = useState('resturants')
  const [ rating, setRating ] = useState('');
  const [filteredPlace, setFilteredPlace] = useState([]);



  const [cordinates, setCordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
      setCordinates({ lat: latitude, lng: longitude })
    })
  }, [])


  useEffect(() => {
    const filteredPlace = places?.filter((place) => Number(place.rating) > rating);

    setFilteredPlace(filteredPlace);
  }, [places, rating])


  useEffect(() => {
    setLoading(false);

    getPlaces(type, bounds?.sw, bounds?.ne)
      .then((data) => {
        setPlaces(data);
        setLoading(false);
      })
  }, [bounds, cordinates, type])



  return (
    <>
      <CssBaseline/>
      <Header/>

      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List 
            places={filteredPlace?.length > 0 ? filteredPlace : places}
            childClick={childClick}
            loading={loading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map
            setCordinates={setCordinates}
            setBounds={setBounds}
            cordinates={cordinates}
            places={filteredPlace?.length > 0 ? filteredPlace : places}
            setChildClick={setChildClick}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
