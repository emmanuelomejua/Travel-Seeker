import { CssBaseline, Grid } from '@mui/material'

import { List, Header, Map } from './components';
import { getPlaces } from './api';
import { useEffect ,useState } from 'react';


function App() {

  const [places, setPlaces] = useState([]);
  const [childClick, setChildClick] = useState(null);

  const [cordinates, setCordinates] = useState({});
  const [bounds, setBounds] = useState({});


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
      setCordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    getPlaces(bounds?.sw, bounds?.ne)
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
          <List places={places}/>
        </Grid>

        <Grid item xs={12} md={8}>
          <Map
            setCordinates={setCordinates}
            setBounds={setBounds}
            cordinates={cordinates}
            places={places}
            setChildClick={setChildClick}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
