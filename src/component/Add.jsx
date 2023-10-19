import React,{useState} from 'react'
import { Tooltip, IconButton, Fab, Box,Modal, Typography, styled, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import profileAvatar from '../static/images/avatar/profile.png';
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';

const Add = () => {
    const [open , setOpen] = useState(false);
     
    const StyledModal = styled(Modal)({
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    })
    const UserBox = styled(Box)({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "20px"
    })


  return (
    <>
      <Tooltip title="Add" 

      onClick={(e)=>setOpen(true)}
        sx={{
            position:"fixed",
            bottom: 20,
            left: {xs:"calc(50% - 25px)", md:30 }
            }}>
          <IconButton>
             <Fab color="primary" aria-label="add">
               <AddIcon/>
             </Fab>
          </IconButton>
      </Tooltip>
       <StyledModal
          open={open}
          onClose={(e)=>setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          
        >
          <Box 
          bgcolor={"background.default"}
          color={"text.primary"}
          width={540}
          height={280}
          p={3}
          borderRadius={5}
          >
            <Typography variant="h6" color="gray" textAlign="center" >
              Create Post
            </Typography>
            
          <UserBox>
             <Avatar alt="Remy Sharp" 
              src={profileAvatar} />

            <Typography variant="span" fontWeight={500}>
               Ali Raza
            </Typography>
          </UserBox>

            <TextField
               sx={{width: "100%" }}
               multiline
               rows={3}
               placeholder="What's on your mind?"
               variant="standard"
            />

            <Stack direction="row" gap={1} mt={2} mb={3} >
                <EmojiEmotions color="primary" />
                <Image color="secondary" />
                <VideoCameraBack color="success" />
                <PersonAdd color="error"/>
            </Stack>

          <ButtonGroup variant="contained" sx={{width:"100%"}}  >
            <Button sx={{width:"100%"}}>Post</Button>
            <Button sx={{width: "100px"}}>
                <DateRange />
            </Button>
          </ButtonGroup>


          </Box>
       </StyledModal>

    </>
  )
}

export default Add
