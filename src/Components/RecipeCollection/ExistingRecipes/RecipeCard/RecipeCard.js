import React, { useState } from 'react'
import { Panel, Placeholder } from 'rsuite'
import food_intro from '../../../../assets/food_intro.jpg'
import { useNavigate } from 'react-router-dom'
import { Rate } from 'rsuite';

const RecipeCard = ({ data }) => {

    const navigate = useNavigate()

    const [hoverValue, setHoverValue] = useState({...data.rating});


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

    return (
        <Panel className='border border-8 max-w-sm m-2' onClick={() => navigate('/recipe-page', {state:{data}})} role='button'>
            <img style={{ maxHeight: '300px' }} src={food_intro} className='rounded-md' />
            <p className='recipe-title font-sans font-semi-bold text-2xl'>{data?.recipeName}</p>
            <>
                <Rate defaultValue={data.rating} onChangeActive={setHoverValue} />{' '}
                <span style={textStyle}>{texts[hoverValue]}</span>
            </>
            {data?.steps?.filter((filterItem, index) => index < 3)?.map(subItem => <p className='font-sans font-semibold'>{subItem?.mainStep}</p>)}
            <Placeholder.Paragraph />
        </Panel>
    )
}

export default RecipeCard