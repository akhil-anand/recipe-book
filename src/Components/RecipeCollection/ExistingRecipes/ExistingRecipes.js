import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RecipeCard from './RecipeCard/RecipeCard'

const ExistingRecipes = () => {
    
    const { collections } = useSelector((state) => state.CollectionSlice)

    const navigate = useNavigate()

    console.log(collections)
    return (
        <div>
            <h5>Existing Recipes</h5>
            {collections.map(item => <RecipeCard data={item}/> )}

        </div>
    )
}

export default ExistingRecipes