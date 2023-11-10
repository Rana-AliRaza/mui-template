import React from 'react';
import { Box, Button, Stack , Paper, Link} from '@mui/material';
import { BsGlobe } from 'react-icons/bs'
import { justifyCenter } from '../theme/commonStyles';



const footerLinks = [
    { id: 1, text: 'privacy', url: '#'},
    { id: 2, text: 'Terms', url: '#'},
    { id: 3, text: 'Sitemap', url: '#'}
]
const MobileFooter = () => {

  return (
    <Box sx={{borderTop:'1px solid #ccc', mt: 3, pt: 2, width:'100%' }}>
       <Button color='inherit'>
        <Box sx={{...justifyCenter, mr: 1 }}>
          <BsGlobe size={ 24 } />
        </Box>
         English (US)
       </Button>
       <Button color='inherit'>
         $ USD
       </Button>

       <Stack sx={{ mt:2 }} >
        <Paper elevation={0}>
          <Link href="#" underline='none' color='inherit'> 2023 AirBnB copyright Inc </Link>
        </Paper>
       </Stack>

       <Stack sx={{mt:2}} direction='row' spacing={2}>
         {
            footerLinks.map((link)=>{
                return(
                    <Paper key={link.id} elevation={0}>
                      <Link href={link.url} underline='none' color='inherit'>{link.text}</Link>
                    </Paper>
                )
            })
         }
       </Stack>

    </Box>
  )
}

export default MobileFooter
