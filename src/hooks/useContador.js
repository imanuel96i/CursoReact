import React, { useMemo, useState } from 'react'

export const useContador = (initialState=null) => {
    
    const [count3, setCount3] = useState(initialState===null ? 0 : initialState.initialState)
    
    const cuenta = (value) => {
        setCount3(count3 + value)
    }
    
    return {
        count3,
        cuenta
    }
}
