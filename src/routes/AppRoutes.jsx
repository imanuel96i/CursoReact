import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppLayout } from '../layouts/AppLayout'
import { PageContador, PageHome, PagePersonajes, PageTextos, PageTextosSecundarios, PagePlanetas } from '../pages'
import { PagePlanetasNew } from '../pages/PagePlanetasNew'

export const AppRoutes = () => {
    return (
        <AppLayout>
            <Routes>
                <Route path='/contador/*' element={<PageContador/> } />
                <Route path='/textossecundarios/*' element={<PageTextosSecundarios/> } />
                <Route path='/textos/*' element={<PageTextos/> } />
                <Route path='/personajes/*' element={<PagePersonajes/> } />
                <Route path='/planetas/*' element={<PagePlanetas/> } />
                <Route path='/planetasnew/*' element={<PagePlanetasNew/> } />
                <Route path='/*' element={<PageHome/> } />
            </Routes>
        </AppLayout>
    )
}
