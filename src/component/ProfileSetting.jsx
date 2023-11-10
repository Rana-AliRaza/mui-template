import React from 'react';
import { Box , Stack , Link , Button} from '@mui/material';
import { flexCenter } from '../theme/commonStyles';

import { BsGlobe } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';


 
function ProfileSetting() {
  return (
    <Box sx={flexCenter} >
    <Link href='#' underline="none" color='inherit'>Airbnb your home</Link>
    <Button color='inherit'>
       <BsGlobe size={24}/>
    </Button>
    <Button color='inherit' sx={{
        flexDirection: 'row',
        borderRadius: 10, border: '1px solid #ddd'
    }} >
    <Stack sx={{flexDirection: 'row', px: 2, py:1, gap: 2,}}>
      <AiOutlineMenu size={24} />
      <FaRegUserCircle size={24}  />
    </Stack>

    </Button>
      
    </Box>
  )
}

export default ProfileSetting
