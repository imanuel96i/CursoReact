import React, { useEffect, useMemo, useState } from 'react'
import { TablaRegistros } from '../components/Table/TablaRegistros'
import { usePersonajes } from '../hooks/usePersonajes'
import { usePlanetas } from '../hooks/usePlanetas'
import { Button } from '@mui/material'

export const PageHome = () => {

    const {personajes,columnaspj, obtenerPersonajes} = usePersonajes()
    const { planetas, columnaspl, obtenerPlanetas } = usePlanetas()
    const [data, setData] = useState([])
    const [dataColumn, setDataColumn] = useState([])
    const [titulo, setTitulo] = useState("Personajes")

    useEffect(() => {
        obtenerPersonajes()
        obtenerPlanetas()
    },[])

    useEffect(() => {
        setData(personajes)
        setDataColumn(columnaspj)
    },[personajes])

    const ClickPersonajes = () => {
        setData(personajes), setDataColumn(columnaspj), setTitulo("Personajes")
    }

    const ClickPlanetas = () => {
        setData(planetas), setDataColumn(columnaspl),  setTitulo("Planetas")
    }

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
                <h2>Listado de {titulo}</h2>
                <div className='table'>
                    <TablaRegistros colummnas={dataColumn} data={data} />
                </div>
            </div>
        </div>
    )
}
