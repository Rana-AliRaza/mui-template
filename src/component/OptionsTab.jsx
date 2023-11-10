import React from 'react';
import { Box, Button, Container, Tab, Tabs, tabsClasses } from '@mui/material';
import { locationsTab } from '../data/mock-data';
import { FaFilter } from 'react-icons/fa';


const OptionsTab = () => {
    const [ value , setValue ] = React.useState(0);

    const HandleChange = ( event , newValue)=>{
        setValue(newValue);
    }
  return (
    <Container maxWidth="xl">
       <Box
       sx={{
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        px: { sx: 0, md: 2},
        mt: 2,
        mb: 2
       }}>
        <Tabs 
        value={value}
        onChange={HandleChange}
        variant='scrollable'
        scrollButtons
        sx={{
            [ `&. ${tabsClasses.scrollButtons}`]:{
                '&.Mui-disabled': {opacity: 0.3},
            },
        }}
        >
           {locationsTab.map( (tab)=>{
             return <Tab key={tab.id} icon={tab.icon} label={tab.label} />
           })}
        </Tabs>
        <Button variant="outlined" disableRipple border='none' color='inherit'
        sx={{
          display: {xs: 'none', md: 'block'},
          border: '1px solid #ddd',
          minWidth: 90,
          justifyontent: 'space-between',
          py: 1,
          borderRadius: 2,
          textTransform: 'capitalize',
          color: 'theme.palette.text.primary'
          
        }}>
          <FaFilter />filter
        </Button>

       </Box>
    </Container>
  )
}

export default OptionsTab
