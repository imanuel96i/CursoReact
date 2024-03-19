import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    lista: null,
    message: null,
}

const personajesSlice = createSlice({
    name: 'personajes',
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

export const { setList, setMessageError } = personajesSlice.actions

export default personajesSlice.reducer