import React, { useEffect, useMemo, useState } from 'react'
import { TablaRegistros } from '../components/Table/TablaRegistros'
import { usePersonajes } from '../hooks/usePersonajes'
import { usePlanetas } from '../hooks/usePlanetas'
import { Button } from '@mui/material'
import {loading} from '../assets'

export const PageHome = () => {

    const {personajes,columnaspj, obtenerPersonajes} = usePersonajes()
    const { planetas, columnaspl, obtenerPlanetas} = usePlanetas()
    const [tipo, setTipo] = useState(1)
    
    const getData = async () => {
        const responsePlanetas = planetas === null ? await obtenerPlanetas() : planetas
        if (personajes === null) obtenerPersonajes(responsePlanetas);
    }

    useEffect(() => {
        getData()
    }, [])


    const ClickPersonajes = () => setTipo(1)

    const ClickPlanetas = () => setTipo(2)

    return (
        <div className='grid-container'>
            <div  className="item1">
                <h1>Dragon ball Z</h1>
            </div>
            <div>
                <Button variant='contained' onClick={()=>ClickPersonajes()}>Personajes</Button>
                <Button variant='contained' onClick={()=>ClickPlanetas()}>Planetas</Button>
            </div>
            <div className="item2">
                <h2>Listado de {tipo===1 ? "Personajes" : "Planetas"}</h2>
                <div className='table'>
                    {personajes === null || planetas === null ? <img src={ loading } alt="loading" style={{alignContent: "center"}}/>: 
                    <TablaRegistros colummnas={tipo===1 ? columnaspj : columnaspl} data={tipo===1 ? personajes: planetas} />}
                </div>
            </div>
        </div>
    )
}
