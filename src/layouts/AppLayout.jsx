import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

export const AppLayout = ({ children }) => {
    
    const navigate = useNavigate()

    return (
        <>
            <Box sx={{ flexGrow: 1}}>
                <AppBar position='absolute'>
                    <Toolbar>
                        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                            Curso React
                        </Typography>
                        <Button color='inherit' onClick={()=> navigate('home')}>Inicio</Button>
                        <Button color='inherit' onClick={()=> navigate('personajes')}>Personajes DBZ</Button>
                        <Button color='inherit' onClick={()=> navigate('planetas')}>Planetas DBZ</Button>
                        <Button color='inherit' onClick={()=> navigate('contador')}>Contador</Button>
                        <Button color='inherit' onClick={()=> navigate('textos')}>Textos</Button>
                        <Button color='inherit' onClick={()=> navigate('textossecundarios')}>Textos Secundarios</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div style={{marginTop: "5%"}}>
                {children}
            </div>
        </>
    )
}
