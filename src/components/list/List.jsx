import { useState, useEffect, createRef } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import PlaceDetails from '../placeDetails/PlaceDetails'

import useStyles from './styles'


const List = ({ places, childClick, loading, type, setType, rating, setRating }) => {
  
  const classes = useStyles()


  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places, elRefs])


  return (
    <div className={classes.container}>
      <Typography variant='h6'> Resturants, Hotels and Attractions around you </Typography>
      {loading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem'/>
        </div> 
      ) : 

      <>
        <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onClick={(e)=>setType(e.target.value)}>
            <MenuItem value='resturants'>Resturants</MenuItem>
            <MenuItem value='hotels'>Hotels</MenuItem>
            <MenuItem value='attractions'>Attractions</MenuItem>
          </Select>
        </FormControl>
        
        <FormControl className={classes.formControl}>
          <InputLabel>Rating</InputLabel>
          <Select value={rating} onClick={(e)=>setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>

        <Grid container spacing={3} className={classes.list}>
          {places?.map((place, i) => (
            <Grid item key={i} xs={12}>
              <PlaceDetails 
                place={place}
                selected={Number(childClick) === i}
                refProp={elRefs[i]}
                />
            </Grid>
          ))}
        </Grid>
      </>
      }
    </div>
  )

}

export default List
