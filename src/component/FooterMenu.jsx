import React from 'react'
import { Box , Stack, Typography, Button} from '@mui/material'
import { FaSearch, FaRegHeart, FaRegUserCircle } from 'react-icons/fa'

const footerMenu =[
    { id: 1, text: 'Explore',  icon: <FaSearch size={18}/> },
    { id: 2, text: 'Whishlist',icon: <FaRegHeart size={18}/> },
    { id: 3, text: 'Login',    icon: <FaRegUserCircle size={18}/>}
]
const FooterMenu = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1,  }}>
        {
            footerMenu.map((item)=>{
               return(
                <Button key={item.id}>
                  <Stack sx={{ 
                    justifyContent: 'center',
                    alignItems: 'center',
                }} 
                direction= 'column'
                spacing='1'
                >
                 { item.icon}
                 <Typography> { item.text } </Typography>
                  </Stack>
                </Button>
               ) 
            })

        }
    </Box>
  )
}

export default FooterMenu
