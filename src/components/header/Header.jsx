import { Autocomplete } from "@react-google-maps/api"
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material"


const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className="">
        <Typography variant="h5" className="">
          Travel Seeker
        </Typography>

      <Box display='flex'>
        <Typography variant="h6" className="">
           Explore new places
        </Typography>

        <Autocomplete>
          <div className="">
              <div className="">
                Search
              </div>
              <InputBase placeholder="Search..." classes={{
                root: ''
              }}/>
          </div>
        </Autocomplete>
      </Box>
      </Toolbar>
      
    </AppBar>
  )
}

export default Header
