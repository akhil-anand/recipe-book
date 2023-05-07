import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import RecipeCollection from './Components/RecipeCollection/RecipeCollection'
import RecipePage from './Components/RecipeCollection/RecipePage/RecipePage'

const RoutesConfig = () => {
  return (
    <Routes>
        <Route path="/recipe-book" element={<LandingPage />} />
        <Route path="/Collections" element={<RecipeCollection />} />
        <Route path="/Recipe-page" element={<RecipePage />} />
        <Route path="*" element={<Navigate to="/recipe-book" />} />
    </Routes>
  )
}

export default RoutesConfig