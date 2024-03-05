import React, { useEffect } from 'react'
import { usePersonajes } from '../hooks/usePersonajes'
import {AppLayout} from '../layouts/AppLayout'
import { TablaRegistros } from '../components/Table/TablaRegistros'

export const PagePersonajes = () => {

    const {personajes,columnaspj, obtenerPersonajes} = usePersonajes()

    useEffect(() => {
        obtenerPersonajes()
    }, [])
    

    return (
        <>
            <div className='grid-container'>
                    <div>
                    <h2>Listado de Personajes</h2>
                    <div className='table'>
                        <TablaRegistros colummnas={columnaspj} data={personajes} />
                    </div>
                </div>
            </div>
        </>
    )
}
