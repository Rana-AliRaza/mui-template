import React from 'react';
import { Box , Container} from '@mui/material';
import { dFlex, flexBetweenCenter, displayOnDesktop } from '../theme/commonStyles.js';
import Logo from './Logo';
import Location from './Location.jsx';
import ProfileSetting from './ProfileSetting.jsx';
import MobileSearch from './MobileSearch.jsx';



const Header = () => {
  return (
    <Box sx={{
     ...dFlex,
     minHeight: 70,
     borderBottom: '1px solid #ddd',
     
     
    }}>
      <Container maxWidth="xl">
        <Box sx={{
            ...flexBetweenCenter,
            minHeight: 70,
            px: 4
        }}>
          <Box sx={ displayOnDesktop }>
            <Logo />
          </Box>
          <Box sx={ displayOnDesktop }>
            <Location />
          </Box>
          <Box sx={ displayOnDesktop }>
            <ProfileSetting />
          </Box>

          <Box sx={{
            display: { sx: 'flex', md: 'none'}
          }}>
            <MobileSearch />
          </Box>


        </Box>
       </Container>
    </Box>
  )
}

export default Header
