import React, { useEffect } from 'react'
import { TablaRegistros } from '../components/Table/TablaRegistros'
import { usePlanetas } from '../hooks/usePlanetas'

export const PagePlanetas = () => {

    const {planetas,columnaspl, obtenerPlanetas} = usePlanetas()

    useEffect(() => {
        obtenerPlanetas()
    },[])




    return (
        <>
            <div className='grid-container'>
                <div>
                    <h2>Listado de Planetas</h2>
                    <div className='table'>
                        <TablaRegistros colummnas={columnaspl} data={planetas}/>
                    </div>
                </div>
            </div>
        </>
    )
}
