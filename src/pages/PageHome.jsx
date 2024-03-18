import React, { useEffect, useMemo, useState } from 'react'
import { TablaRegistros } from '../components/Table/TablaRegistros'
import { usePersonajes } from '../hooks/usePersonajes'
import { usePlanetas } from '../hooks/usePlanetas'
import { Button } from '@mui/material'
import {loading} from '../assets'

export const PageHome = () => {

    const {personajes,columnaspj} = usePersonajes()
    const { planetas, columnaspl } = usePlanetas()
    const [data, setData] = useState([])
    const [dataColumn, setDataColumn] = useState([])
    const [titulo, setTitulo] = useState("Personajes")

    useEffect(() => {
        const newPersonajes = personajes?.map(p => ({
            ...p, planeta: p.race === "Saiyan" ? planetas?.filter(p => p.name === "Tierra")[0].image : 
                            p.race === "Namekian" ? planetas?.filter(p => p.name === "Namek")[0].image : 
                            p.race === "Human" ? planetas?.filter(p => p.name === "Tierra")[0].image :
                            p.race === "Frieza Race" ? planetas?.filter(p => p.name === "Freezer No. 79")[0].image : 
                            p.race === "Android" ? planetas?.filter(p => p.name === "Tierra")[0].image : ""
        }))
        setData(newPersonajes)
        setDataColumn(columnaspj)
    }, [])


    const ClickPersonajes = () => {
        const newPersonajes = personajes?.map(p => ({
            ...p, planeta: p.race === "Saiyan" ? planetas?.filter(p => p.name === "Tierra")[0].image : 
                            p.race === "Namekian" ? planetas?.filter(p => p.name === "Namek")[0].image : 
                            p.race === "Human" ? planetas?.filter(p => p.name === "Tierra")[0].image :
                            p.race === "Frieza Race" ? planetas?.filter(p => p.name === "Freezer No. 79")[0].image : 
                            p.race === "Android" ? planetas?.filter(p => p.name === "Tierra")[0].image : ""
        }))
        setData(newPersonajes)
        setDataColumn(columnaspj)
        setTitulo("Personajes")
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
                    {dataColumn === null ? <img src={ loading } alt="loading" style={{alignContent: "center"}}/>: 
                    <TablaRegistros colummnas={dataColumn} data={data} />}
                </div>
            </div>
        </div>
    )
}
