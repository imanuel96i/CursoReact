import React, { useMemo, useState } from 'react'
import { requestAPI } from '../backend/RequestBackend'

export const usePlanetas = () => {

    const [planetas, setPlanetas] = useState([])
    
    const columnaspl = useMemo(() =>
        [
            {
                accessorKey: 'name',
                header: 'Nombre',
                size: 150
            },
            {
                accessorKey: 'isDestroyed',
                header: '¿Esta Destruido?',
                size: 150
            },
            {
                accessorKey: 'description',
                header: 'Descripcion',
                size: 500
            },
            {
                accessorKey: 'image',
                header: 'Imagen',
                size: 500,
                Cell: ({ cell }) => <img src={cell.getValue()} loading='lazy' width="200px" height="200px" alt='Planeta' />,
            }
        ]
    )

    const planetasDBZ = useMemo(() => {
        return planetas.map(p => ({ ...p, isDestroyed: p.isDestroyed ? "Si" : "No" }))
    },[planetas])

    const obtenerPlanetas = async () => {
        const response = await requestAPI('GET', import.meta.env.VITE_APP_URL_PLANETAS)
        setPlanetas(response.items)
    }

    return {
        obtenerPlanetas,
        planetas: planetasDBZ,
        columnaspl
    }
}
