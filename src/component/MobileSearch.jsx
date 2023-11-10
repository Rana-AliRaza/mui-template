import { IconButton, Input, Paper } from '@mui/material';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';

const MobileSearch = () => {
  return (
    <Paper component="form" sx={{
        padding: '2px, 4px',
        width: "400",
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: 20,
    }}>
        <IconButton sx={{ p: '10px' }}>
            <FaSearch/>
        </IconButton>

        <Input sx={{  ml: 1, flex: 1 }} placeholder='where to?' />

        <IconButton type="submit" sx={{ p: '10px' }} >
            <VscSettings />
        </IconButton>

    </Paper>
  )
}

export default MobileSearch
