import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { Rating } from '@mui/lab'

import useStyles from './styles'
import { LocationOnOutlined } from '@mui/icons-material';


const url = 'https://media.istockphoto.com/id/1700592253/photo/crispy-soft-shell-crab-with-garlic-aioli.webp?b=1&s=612x612&w=0&k=20&c=-bPU1aod_6JTARJ-SaNyuec4Dm0JE0DaEzKeN_7P-zg='

const Map = ({setCordinates, setBounds, cordinates, places }) => {

  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width: 600px)')


  return (

    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyCPZc0VaRQ53fMO81_Cg1pqtLj5ogtF_I0'}}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true,  }}
        onChange={(e) => {
          setCordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={() => {}}
      >
        {places?.map((place, i) => (
          <div 
            key={i}
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
          >
            { !isDesktop ?
              <LocationOnOutlined color='primary' fontSize='large' /> :
              (
                <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                      {place.name}
                    </Typography>
                    <img src={place.photo ? place.photo.images.large.url : url} alt={place.name} className={classes.pointer}/>

                    <Rating size='small' value={Number(place.rating)} readOnly/>
                </Paper>
              )
            }
          </div>
        ))}
      </GoogleMapReact> 

    </div>
  )

}

export default Map

// AIzaSyCPZc0VaRQ53fMO81_Cg1pqtLj5ogtF_I0

// AIzaSYbFunsUmQ7N12nT29zMLRFg_srd0dtHSUo
