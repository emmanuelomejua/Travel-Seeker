import { Autocomplete } from "@react-google-maps/api"
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core"
import { Search } from '@mui/icons-material'
import useStyles  from './styles'
import { useState } from "react"


const Header = ({ setCordinates }) => {

  const classes = useStyles();

  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  }

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCordinates({ lat, lng })
  }

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Seeker
        </Typography>

      <Box display='flex'>
        <Typography variant="h6" className={classes.title}>
           Explore new places
        </Typography>

        <Box>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Search/>
                </div>
                <InputBase placeholder="Search..." classes={{
                  root: classes.inputRoot, input: classes.inputInput
                }}/>
            </div>
          </Autocomplete>
         </Box> 
      </Box>
      </Toolbar>
      
    </AppBar>
  )
}

export default Header
