import { Box, Typography, Card, CardActions, CardMedia, CardContent, Button } from '@mui/material';
import { LocationOn, Phone } from '@mui/icons-material';
import { Rating } from '@mui/lab'
import { url } from '../../util/ImgUrl';
import useStyles from './styles';
import { Chip } from '@material-ui/core';




const PlaceDetails = ({ place, selected, refProp }) => {


  const classes = useStyles();

  if(selected){
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }


  return (
    <Card elevation={6}>
      <CardMedia
        style={{height: 320}}
        image={place.photo ? place.photo.images.large.url : url}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>
          {place.name}
        </Typography>

        <Box display='flex' justifyContent='space-between'>
          <Rating size='small' value={Number(place.rating)} readOnly/>
          <Typography gutterBottom variant='subtitle1'>Out of {place.num_reviews} reviews</Typography>
        </Box>

        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
        </Box>

        { 
        place.awards?.map((award) => (
          <Box display='flex' my={1} justifyContent='space-between' alignItems='center'>
            <img src={award.images.small} alt={award.display_name}/>
            <Typography variant='subtitle1' color='textSecondary'>{award.display_name}</Typography>
          </Box>
        ))
        }

        { place?.cuisine?.map(({ name }) => (
          <Chip key={name} label={name} size='small' className={classes.chip}/>
        ))}

        {place?.address && 
        (
          <Typography variant='subtitle2' gutterBottom color='textSecondary' className={classes.subtitle}>
            <LocationOn/> {place.address}
          </Typography>
        )
        }

        {place?.phone && 
        (
          <Typography variant='subtitle2' gutterBottom color='textSecondary' className={classes.spacing}>
            <Phone/> {place.phone}
          </Typography>
        )}

        <CardActions>
          <Button size='small' color='primary' onClick={() => window.open(place.web_url, '_blanc')}>
           Ask Trip Advisor
          </Button>

          <Button size='small' color='primary' onClick={() => window.open(place.website, '_blanc')}>
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails
