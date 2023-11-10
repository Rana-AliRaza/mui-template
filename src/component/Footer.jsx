import React from 'react'
import { Box, Button, Container, Link, Paper, Stack } from '@mui/material'
import { flexBetweenCenter, fullWidthFlex, justifyCenter } from '../theme/commonStyles'
import { BsGlobe } from 'react-icons/bs'
import  { IoChevronUpOutline } from 'react-icons/io5'

const Footer = () => {
    const footerLinks = [
        { id: 1, text: "Privacy", url: '#' },
        { id: 2, text: "Terms", url: '#' },
        { id: 3, text: "Sitemap", url: '#' },
        { id: 4, text: "Destinations", url: '#' }
    ]
    return (
        <Box sx={{
            ...fullWidthFlex,
            borderTop: '1px solid #ddd',
        }}>
            <Container maxWidth='xl'>
                <Box sx={{
                    ...flexBetweenCenter,
                    width: '100%',
                }}>
                    <Stack direction='row' spacing={2}>
                        <Paper variant={0}>
                          <Link href='#' underline='none' color='inherit'> 2023 Airbnb Copyright </Link>
                        </Paper>
                    {
                        footerLinks.map((link) => {
                            return (
                                <Paper key={link.id} variant={0}>
                                    <Link href={link.url} underline='none' color='inherit'>   {link.text} </Link>
                                </Paper>
                            )
                        })
                    }
                    </Stack>


                    <Stack>
                      <Paper sx={justifyCenter} variant={0}>
                        <Button color='inherit'>
                          <Box sx={{...justifyCenter, mr: 1}}>
                            < BsGlobe size={ 24 } />
                          </Box>
                          English(US)
                        </Button>
                        <Button color='inherit'> $ USD </Button>
                        <Button color='inherit'>
                             Support & Resources 
                          <Box sx={{...justifyCenter, ml:1}}>
                            <IoChevronUpOutline size={24} />
                          </Box>
                        </Button>
                      </Paper>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer
