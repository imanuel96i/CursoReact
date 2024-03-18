import React, { useEffect } from 'react'
import { TablaRegistros } from '../components/Table/TablaRegistros'
import { usePlanetas } from '../hooks/usePlanetas'

export const PagePlanetasNew = () => {

    const {planetas,columnaspl, obtenerPlanetas} = usePlanetas()

    useEffect(() => {
        if(planetas === null) obtenerPlanetas()
    },[])




    return (
        <>
            <div className='grid-container'>
                <div>
                    <h2>Listado de Planetas</h2>
                    <div className='table'>
                        {planetas === null ? <h2>Loading.........</h2> :
                            <TablaRegistros colummnas={columnaspl} data={planetas} />}
                    </div>
                </div>
            </div>
        </>
    )
}
