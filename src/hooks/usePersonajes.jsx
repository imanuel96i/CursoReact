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

    const obtenerPersonajes = async (planetas) => {
        const response = await requestAPI('GET', import.meta.env.VITE_APP_URL_PERSONAJES)
        const { items } = response
        const newPersonajes = items?.map(p => ({
            ...p, planeta: p.race === "Saiyan" ? planetas?.filter(p => p.name === "Tierra")[0].image : 
                            p.race === "Namekian" ? planetas?.filter(p => p.name === "Namek")[0].image : 
                            p.race === "Human" ? planetas?.filter(p => p.name === "Tierra")[0].image :
                            p.race === "Frieza Race" ? planetas?.filter(p => p.name === "Freezer No. 79")[0].image : 
                            p.race === "Android" ? planetas?.filter(p => p.name === "Tierra")[0].image : ""
        }))
        dispatch(setList({ lista: newPersonajes, message: "OK" }))
    }

    const listaPersonajes = useMemo(() => {
        return {lista} ? lista : null
    })

    return {
        obtenerPersonajes,
        personajes: listaPersonajes,
        columnaspj
        
    }
}
