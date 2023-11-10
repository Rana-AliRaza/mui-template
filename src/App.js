import React from 'react';
import { Box, CssBaseline, Container } from '@mui/material';
import Header from './component/Header.jsx';
import OptionsTab from './component/OptionsTab.jsx';
import LocationCards from './component/LocationCards.jsx';
import Footer from './component/Footer.jsx';
import MobileFooter from './component/MobileFooter.jsx';
import FooterMenu from './component/FooterMenu.jsx';

const App = () => {
  return (
  <React.Fragment>
    <CssBaseline />
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }}>
       <Box>
        <Header />

        <OptionsTab />
       </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 100,
          flexGrow: 1,
          overflowY:'scroll',
        }}>
        <Container maxWidth="xl" sx={{ mb: 3  }}  >
          <LocationCards />
          <Box sx={{ display:{xs:'flex', md: 'none'} }}>
            <MobileFooter />
          </Box>
        </Container>
        </Box>

        <Box  sx={{ display: { xs: 'flex', md: 'none' }  }}>
          <FooterMenu />
        </Box>

        <Box sx={{ display:{ xs: 'none', md:'block'} }}>
          <Footer />
        </Box>

    </Box>
  </React.Fragment>
  )
}
 export default App
