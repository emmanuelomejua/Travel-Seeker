import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { LocationOnOutlined } from '@mui/icons-material'
import { Rating } from '@mui/lab'

import useStyles from './styles'

const Map = ({setCordinates, setBounds, cordinates }) => {

  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width: 600px)')


  return (

    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSYbFunsUmQ7N12nT29zMLRFg_srdOdtHSUo'}}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true,  }}
        onChange={(e) => {
          setCordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.target?.ne, sw: e.target?.sw })
        }}
        onChildClick={() => {}}
      >
        {/* <div lat={cordinates.lat} lng={cordinates.lng}>
          <LocationOnOutlined />
        </div> */}
      </GoogleMapReact> 

    </div>
  )

}

export default Map

// AIzaSyCPZc0VaRQ53fMO81_Cg1pqtLj5ogtF_I0

// AIzaSYbFunsUmQ7N12nT29zMLRFg_srd0dtHSUo
