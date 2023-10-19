import React,{useState} from 'react';

import { ThemeProvider } from '@emotion/react';
import {   Box , Stack, createTheme} from '@mui/material';
import Rightbar from './component/Rightbar';
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';
import Feeds from './component/Feeds';
import Add from './component/Add';

const App = () => {
  const [ mode, setMode ] = useState("dark");
  const darkTheme = createTheme({
    palette:{
      mode: mode,
    },
  })

  return (
   <ThemeProvider theme={darkTheme} >
     <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between"  >
         <Sidebar  setMode={setMode} mode={mode}/>       
         <Feeds />
         <Rightbar />
      </Stack>
      <Add />
     </Box>
   </ThemeProvider>
  )
}

export default App
