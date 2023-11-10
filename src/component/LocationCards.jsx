import React from 'react';
import { locations as cardLocations } from '../data/mock-data';
import { Grid , Box } from '@mui/material';
import CarouselCard from './CarouselCard';

const LocationCards = () => {
    const [ cards ] = React.useState(cardLocations);
    if(!cards.length){
        return null;
    }
  return (
   <Box  sx={{ mx: 2 }}>
    <Grid container rowSpacing={3} columnSpacing={3}>
       {
        cards.map((location)=>{
           
        return (
               <Grid key={location.id} item xs={12} sm={4} md={4} xl={3}>
                   <CarouselCard location={location}/>
               </Grid>
               ) 
        })
    }
    </Grid>

   </Box>
  )
}

export default LocationCards
