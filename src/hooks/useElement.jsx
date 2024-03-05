import React from 'react'

export const useElement = () => {
    
    const inputcustom = (value, onchange, style) => {
        return (
            <input onChange={(e) => onchange(e.target.value)} style={style} value={value}/>
        )
    }

    const inputButtonCustom = (value,onclick,label) => {
        return (
            <button style={{ backgroundColor: value }} onClick={() => onclick()}>{label}</button>
        )
    }
    
    return {
        inputcustom, 
        inputButtonCustom
    }
}
