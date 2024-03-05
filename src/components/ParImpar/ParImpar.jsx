import React from 'react'

const ParImpar = ({ numero }) => {
    
    const revisar = (value) => {
        if (value % 2 === 0) {
            return `El ${value} es par`
        } else {
            return `El ${value} es impar`
        }
    }

    return (
        <>
            <label>{revisar(numero) }</label>
        </>
    )
}

export default ParImpar