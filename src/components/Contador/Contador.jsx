import { useEffect, React, useState } from 'react'
import { useElement } from '../../hooks/useElement'
import ParImpar from '../ParImpar/ParImpar'
import { useContador } from '../../hooks/useContador'

const Contador = () => {
    
    const {count3, cuenta} = useContador()
    const {inputButtonCustom} = useElement()
    return (
        <>
            <label>{count3}</label>
            {inputButtonCustom("green",()=>cuenta(1),"+1")}
            {inputButtonCustom("red", () => cuenta(-1), "-1")}
            
            <ParImpar numero={count3} />
        </>
    )
}

export default Contador