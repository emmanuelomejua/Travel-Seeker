// import { Autocomplete } from "@react-google-maps/api"
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core"
import { Search } from '@mui/icons-material'
import useStyles  from './styles'


const Header = () => {

  const classes = useStyles()
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
          {/* <Autocomplete> */}

          <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search/>
              </div>
              <InputBase placeholder="Search..." classes={{
                root: classes.inputRoot, input: classes.inputInput
              }}/>
          </div>
              {/* </Autocomplete> */}
         </Box> 
      </Box>
      </Toolbar>
      
    </AppBar>
  )
}

export default Header
