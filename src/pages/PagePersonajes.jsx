import React, { useEffect, useState } from 'react'
import { usePersonajes } from '../hooks/usePersonajes'
import {AppLayout} from '../layouts/AppLayout'
import { TablaRegistros } from '../components/Table/TablaRegistros'
import { usePlanetas } from '../hooks/usePlanetas'

export const PagePersonajes = () => {

    const { personajes, columnaspj, obtenerPersonajes } = usePersonajes()
    const {planetas} = usePlanetas()
    const [newPersonaje, setNewPersonaje] = useState(personajes?.map(p => ({
            ...p, planeta: p.race === "Saiyan" ? planetas?.filter(p => p.name === "Tierra")[0].image : 
                            p.race === "Namekian" ? planetas?.filter(p => p.name === "Namek")[0].image : 
                            p.race === "Human" ? planetas?.filter(p => p.name === "Tierra")[0].image :
                            p.race === "Frieza Race" ? planetas?.filter(p => p.name === "Freezer No. 79")[0].image : 
                            p.race === "Android" ? planetas?.filter(p => p.name === "Tierra")[0].image : ""
        })))
    return (
        <>
            <div className='grid-container'>
                    <div>
                    <h2>Listado de Personajes</h2>
                    <div className='table'>
                        <TablaRegistros colummnas={columnaspj} data={newPersonaje} />
                    </div>
                </div>
            </div>
        </>
    )
}
