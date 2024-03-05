import React, { useMemo, useState } from 'react'
import { useTexto } from '../hooks/useTexto'
import { useElement } from '../hooks/useElement'

export const PageTextos = () => {
    
    const { texto, cambioTexto, memoTexto } = useTexto({initialState: "Texto Primario"})
    const { inputcustom } = useElement()
    return (
        <>
            {inputcustom(texto, cambioTexto, { width: '25%' })}

            <input onChange={(e)=>cambioTexto(e.target.value)} value={texto}/>
            <h3>{texto}</h3>
            <h3>{memoTexto}</h3>
        </>
    )
}
