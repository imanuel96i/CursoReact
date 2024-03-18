import React, { useMemo, useState } from 'react'
import { requestAPI } from '../backend/RequestBackend'
import { useDispatch, useSelector } from 'react-redux'
import { setList } from '../store/planetas/planetasSlice'

export const usePlanetas = () => {

    const [planetas, setPlanetas] = useState([])
    const { lista } = useSelector((state) => state.planetas)
    const dispatch = useDispatch()
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

    const obtenerPlanetas = async () => {
        const response = await requestAPI('GET', import.meta.env.VITE_APP_URL_PLANETAS)
        setPlanetas(response.items)
        dispatch(setList({ lista: response.items.map(p => ({ ...p, isDestroyed: p.isDestroyed ? "Si" : "No" })), message: "OK" }))
    }

    return {
        obtenerPlanetas,
        planetas: lista,
        columnaspl
    }
}
