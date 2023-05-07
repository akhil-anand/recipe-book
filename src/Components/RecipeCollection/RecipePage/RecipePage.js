import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import food_intro from '../../../assets/food_intro.jpg'
import { Container, Rate, Timeline } from 'rsuite'

const RecipePage = () => {
    const params = useParams()
    const location = useLocation()
    console.log(location.state)

    const [recipeData, setRecipeData] = useState({ ...location?.state?.data })
    const [hoverValue, setHoverValue] = useState({ ...recipeData.rating });


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
        <Container className="h-screen flex items-center justify-center">
            <div>
                <img style={{ maxHeight: '300px' }} src={food_intro} className='rounded-md' />
                <p className='recipe-title font-sans font-semi-bold text-2xl'>{recipeData?.recipeName}</p>
                <>
                    <Rate defaultValue={recipeData.rating} onChangeActive={setHoverValue} />{' '}
                    <span style={textStyle}>{texts[hoverValue]}</span>
                </>
                <Timeline className='custom-timeline mt-8 font-sans font-semibold'>
                    {recipeData?.steps?.map((subItem, index) => <>
                        <Timeline.Item dot={<span>{index + 1 >= recipeData?.steps?.length ? '🍱' :'👩‍🍳'}</span>}>
                            <p>Step {index + 1}</p>
                            <p>{subItem?.mainStep}</p>
                        </Timeline.Item>
                        {subItem?.instructions?.map(instruction => <Timeline.Item><p className='text-md'>{instruction}</p></Timeline.Item>)}

                    </>
                    )

                    }
                </Timeline>
            </div>
        </Container>
    )
}

export default RecipePage