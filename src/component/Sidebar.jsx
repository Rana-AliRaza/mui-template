import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Pages from '@mui/icons-material/Article';
import Groups from '@mui/icons-material/Group';
import MarketPlace from '@mui/icons-material/Storefront';
import Friends from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import Profile from '@mui/icons-material/AccountBox';
import NightMode from '@mui/icons-material/ModeNight';

const Sidebar = ({mode , setMode}) => {
  return (
    <Box  
    flex={1} p={2}
    sx={{ display:{xs:"none", sm:"block"}}} >
      <Box position="fixed">
         <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon color="white"/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Pages color="white"/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Groups color="white"/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <MarketPlace color="white"/>
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Friends color="white"/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <SettingsIcon color="white"/>
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Profile color="white"/>
              </ListItemIcon>
              <ListItemText primary="Profile " />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <NightMode color="white"/>
              </ListItemIcon>
              {/* <ListItemText primary="night" /> */}
              <Switch onClick={(e)=>setMode((mode === "light"? "dark":"light"))} />
            </ListItemButton>
          </ListItem>

         </List>
      </Box>
    </Box>
  )
}

export default Sidebar
