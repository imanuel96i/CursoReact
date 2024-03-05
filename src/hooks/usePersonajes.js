import React, { useMemo, useState } from 'react'
import { requestAPI } from '../backend/RequestBackend'

export const usePersonajes = () => {

    const [personajes, setPersonajes] = useState([])
    
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
            }
        ]
    )

    const personajesDBZ = useMemo(() => {
        return personajes
    }, [personajes])

    const obtenerPersonajes = async () => {
        const response = await requestAPI('GET', import.meta.env.VITE_APP_URL_PERSONAJES)
        setPersonajes(response.items)
    }



    return {
        obtenerPersonajes,
        personajes: personajesDBZ,
        columnaspj
    }
}
