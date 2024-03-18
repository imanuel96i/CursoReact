import React, { useMemo, useState } from 'react'
import { requestAPI } from '../backend/RequestBackend'
import { usePlanetas } from './usePlanetas'
import { useDispatch, useSelector } from 'react-redux'
import { setList } from '../store/personajes/personajesSlice'

export const usePersonajes = () => {

    const { lista } = useSelector((state) => state.personajes)
    const dispatch = useDispatch()
    const columnaspj = useMemo(() =>
        [
            {
                accessorKey: 'name',
                header: 'Nombre',
                size: 150
            },
            {
                accessorKey: 'gender',
                header: 'Genero',
                size: 150
            },
            {
                accessorKey: 'ki',
                header: 'Ki',
                size: 150
            },{
                accessorKey: 'maxKi',
                header: 'Ki Maximo',
                size: 150
            },{
                accessorKey: 'race',
                header: 'Raza',
                size: 150
            },{
                accessorKey: 'affiliation',
                header: 'Afiliacion',
                size: 150
            },
            {
                accessorKey: 'planeta',
                header: 'Planeta',
                size: 500,
                Cell: ({cell}) => <img src={cell.getValue()} loading='lazy' width="200px" height="200px" alt='Planeta' />
            }
        ]
    )

    const obtenerPersonajes = async () => {
        const response = await requestAPI('GET', import.meta.env.VITE_APP_URL_PERSONAJES)
        dispatch(setList({ lista: response.items, message: "OK" }))
    }

    return {
        obtenerPersonajes,
        personajes: lista,
        columnaspj
        
    }
}
