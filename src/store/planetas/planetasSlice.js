import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    lista: null,
    message: null,
}

const planetasSlice = createSlice({
    name: 'planetas',
    initialState,
    reducers: {
        setList: (state, { payload }) => {
            state.lista = payload?.lista
            state.message = payload?.message
        },
        setMessageError: (state, { payload }) => {
            state.message = payload?.error
        }
    }
})

export const { setList, setMessageError } = planetasSlice.actions

export default planetasSlice.reducer