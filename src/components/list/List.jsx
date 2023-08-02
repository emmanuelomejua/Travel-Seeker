import { useState } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'

import useStyles from './styles'


const List = () => {
  const classes = useStyles()
  const [ type, setType ] = useState('resturants')

  return (
    <Grid className={classes.container}>
      <Typography variant='h6'> Resturants, Hotels and Attractions around you </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onClick={(e)=>setType(e.target.value)}>
          <MenuItem value='resturants'>Resturants</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='attractions'>Attractions</MenuItem>
        </Select>
      </FormControl>
      
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onClick={(e)=>setType(e.target.value)}>
          <MenuItem value='resturants'>Resturants</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='attractions'>Attractions</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  )
}

export default List
