import { CssBaseline, Grid } from '@mui/material'

import { List, Header, Map, PlaceDetails } from './components';
import { getPlaces } from './api';
import { useEffect ,useState } from 'react';


function App() {

  const [places, setPlaces] = useState([]);

  const [cordinates, setCordinates] = useState({});
  const [bounds, setBounds] = useState(null);


  useEffect(() => {
    navigator?.geolocation?.getCurrentPosition(({ coords: { latitude, longitude }}) => {
      setCordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    getPlaces()
      .then((data) => {
        setPlaces(data)
      })
  }, [bounds, cordinates])



  return (
    <>
      <CssBaseline/>
      <Header/>

      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List/>
        </Grid>

        <Grid item xs={12} md={8}>
          <Map
            setCordinates={setCordinates}
            setBounds={setBounds}
            cordinates={cordinates}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
