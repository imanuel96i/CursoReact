import React from 'react'
import { useTexto } from '../hooks/useTexto'

export const PageTextosSecundarios = () => {
    
    const {texto, cambioTexto, memoTexto} = useTexto({initialState: "Texto Secundario"})
    
        return (
            <>
                <input onChange={(e)=>cambioTexto(e.target.value)} value={texto}/>
                <h3>{texto}</h3>
                <h3>{memoTexto}</h3>

            </>
    )
}
