import React from 'react';
import { Box , Stack , Typography , Paper , Divider , Button } from '@mui/material';

import  { IoSearchCircleSharp } from 'react-icons/io5';
import { pink } from '@mui/material/colors';

const choices = [
    { id: 1, text: 'Anywhere' },
    { id: 2, text: 'Any weak' },
    { id: 3, text: 'Add guest', withIcon : true }
]

const Location = () => {
  return (
    <Paper sx={{
        borderRadius: 20,
        ml:  15
    }}
    elevation= {3}
    >
      <Stack
      sx={{
        borderRadius: 20,
        pl: 2,
        
        flexDirection: 'row'
      }}
      divider = { <Divider orientation="vertical" flexItem  />}
      >
        { choices.map((choice)=>{
          return(
            <Button  key={ choice.id}>
                 <Typography
                 sx={{
                  color: theme=> theme.palette.text.primary,
                  fontWeight: 'bold'
                 }}>
                   {choice.text}
                 </Typography>
                 {
                  choice.withIcon && (
                    <Box
                    sx={{ml:1, mt:1, mr:1, }}>
                     <IoSearchCircleSharp  color={pink[500]} size={ 32 }/>
                    </Box>
                  )
                 }
            </Button>
          )
        })}

      </Stack>
      
    </Paper>
  )
}

export default Location
