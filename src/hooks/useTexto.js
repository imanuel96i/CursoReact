import React, { useMemo, useState } from 'react'

export const useTexto = (initialState=null) => {
    
    const [texto, setTexto] = useState(initialState === null ? "Vacio" : initialState.initialState)

    const cambioTexto = (value) => {
        setTexto(value)
    }

    const memoTexto = useMemo(() => {
        return `El largo del texto es  ${texto.length}`
    },[texto])

    return {
        texto,
        cambioTexto,
        memoTexto
    }
}
