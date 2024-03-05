import React, { useState } from 'react'
import Contador from '../components/Contador/Contador'
import ParImpar from '../components/ParImpar/ParImpar'
import { useContador } from '../hooks/useContador'

export const PageContador = () => {

    return (
        <>
            <Contador />
        </>
    )
}
