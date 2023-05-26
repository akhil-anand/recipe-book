import React, { useEffect, useState } from 'react'
import { Panel, Placeholder } from 'rsuite'
import food_intro from '../../../../assets/food_intro.jpg'
import { useNavigate } from 'react-router-dom'
import { Rate } from 'rsuite';
import { getAllExistingRecipes } from '../../../../Shared/commonAPICalls';
import axios from 'axios';

import FunnelTimeIcon from '@rsuite/icons/FunnelTime';
import ExitIcon from '@rsuite/icons/Exit';

const RecipeCard = ({ data }) => {

    const navigate = useNavigate()

    const [hoverValue, setHoverValue] = useState({...data.rating});
    const [recipeData, setRecipeData] = useState(data)

    useEffect(() => {
        setRecipeData(data)
    },[data])


    const textStyle = {
        verticalAlign: 'top',
        lineHeight: '42px',
        display: 'inline-block'
    };

    const texts = {
        1: 'Useless',
        2: 'Poor',
        3: 'Ok',
        4: 'Good',
        5: 'Excellent'
    };

    const updateRating = (value) => {
        console.log(value)
        setRecipeData({...recipeData, rating: value })
        return axios.patch(`http://localhost:5000/api/updateRecipe/${recipeData?._id}`, {...recipeData, rating: value })
            .then(() => getAllExistingRecipes())
            .catch(error => console.log(`Unexpected Error occured: ${error}`))
    }

    return (
        <Panel className='border border-8 max-w-sm m-2' 
        // onClick={() => navigate('/Recipe-page', {state:{data}})}
         role='button'>
            <img style={{ maxHeight: '300px' }} src={food_intro} className='rounded-md' />
            <p onClick={() => navigate('/Recipe-page', {state:{data}})} className='recipe-title font-sans font-semi-bold text-2xl'>{data?.recipeName}
            <ExitIcon style={{fontSize: '0.8em', paddingLeft:'4px'}} />
            </p>
            
            <>
                <Rate defaultValue={data.rating} onChangeActive={setHoverValue} onChange={updateRating}/>{' '}
                <span style={textStyle}>{texts[hoverValue]}</span>
            </>
            {data?.steps?.filter((filterItem, index) => index < 3)?.map(subItem => <p className='font-sans font-semibold'>{subItem?.stepName}</p>)}
            <Placeholder.Paragraph />
        </Panel>
    )
}

export default RecipeCard