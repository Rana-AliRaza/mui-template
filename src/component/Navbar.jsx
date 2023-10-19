import React, {useState} from 'react';
import {AppBar, Toolbar , styled , Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import Pets from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatarImage from '../static/images/avatar/profile.png'



const Navbar = () => {
 
  const [ open , setOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between",

  })

  const Search = styled("div") ( ({ theme }) => ({
    backgroundColor: "white",
    width: "40%",
    borderRadius: theme.shape.borderRadius,
    padding: "0px  10px",
  }))

  const Icons = styled(Box) ( ({theme})=>({
    gap: "20px",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
      display: "flex",
    }
  }))

  const UserBox = styled(Box)( ({theme})=>({
    gap: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
      display: "none",
    }

  }))

  return (
      <AppBar position='sticky'>
        <StyledToolbar>
          <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}> Ali Raza</Typography>
          <Pets sx={{display:{ sm: "none",xs:"block"}}} /> 
          <Search color='text.primary'> <InputBase placeholder='search...'  />   </Search>

          <Icons>
            <Badge badgeContent={4} color="error">
               <MailIcon color="white" />
            </Badge>
            <Badge badgeContent={4} color="error">
               <NotificationsIcon color="white" />
            </Badge>
           <Avatar alt="Ali Raza" src={avatarImage}  onClick={e=>setOpen(true)}/>
          </Icons>

          <UserBox onClick={e=>setOpen(true)}>
            <Avatar alt="Ali Raza" src={avatarImage} />
            <Typography>Ali</Typography>
          </UserBox>
        </StyledToolbar>
   

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose = {(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem> Profile    </MenuItem>
        <MenuItem> My account </MenuItem>
        <MenuItem> Logout     </MenuItem>
      </Menu>
    
  

        
      </AppBar>
  )
}

export default Navbar
