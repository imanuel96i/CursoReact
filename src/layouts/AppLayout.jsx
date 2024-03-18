import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { usePlanetas } from '../hooks/usePlanetas';
import { usePersonajes } from '../hooks/usePersonajes';
import { loading } from '../assets';

export const AppLayout = ({ children }) => {
    
    const { planetas, obtenerPlanetas } = usePlanetas()
    const {personajes, obtenerPersonajes} = usePersonajes()

    useEffect(() => {
        if(planetas===null) obtenerPlanetas()
        if(personajes===null) obtenerPersonajes()
    },[])
    const navigate = useNavigate()

    return (
        <>
            <Box sx={{ flexGrow: 1}}>
                <AppBar position='absolute'>
                    <Toolbar>
                        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                            Curso React
                        </Typography>
                        {planetas===null && personajes===null ? "" :
                            <><Button color='inherit' onClick={()=> navigate('home')}>Inicio</Button>
                            <Button color='inherit' onClick={()=> navigate('personajes')}>Personajes DBZ</Button>
                            <Button color='inherit' onClick={()=> navigate('planetas')}>Planetas DBZ</Button>
                            <Button color='inherit' onClick={()=> navigate('planetasnew')}>Planetas DBZ NEW</Button>
                            <Button color='inherit' onClick={()=> navigate('contador')}>Contador</Button>
                            <Button color='inherit' onClick={()=> navigate('textos')}>Textos</Button>
                            <Button color='inherit' onClick={() => navigate('textossecundarios')}>Textos Secundarios</Button></>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
            <div style={{ marginTop: "5%" }}>
                {
                    planetas === null && personajes === null ? <img src={ loading } alt="loading" style={{alignContent: "center"}}/> : 
                    children
                }
            </div>
        </>
    )
}
