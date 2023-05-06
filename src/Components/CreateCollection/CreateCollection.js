import React from 'react'
import { Panel } from 'rsuite'
import food_intro from '../../assets/food_intro.jpg'

const CreateCollection = () => {
    return (
        <div className='recipe-div rounded-md shadow-xl p-10 my-5'>
            <h5 className='recipe-title text-6xl text-start'>Create Your Collection</h5>
            <div className='flex flex-wrap my-4'>
                <Panel className='border border-8 max-w-sm m-2'>
                    <img style={{ maxHeight: '300px' }} src={food_intro} className='rounded-md'/>
                    <p className='recipe-title font-sans font-semi-bold text-2xl'>Add Recipe</p>
                    <p className='font-sans font-semibold'>Quickly and easily add your favorite recipes. Customize cooking times and ingredients lists.</p>
                </Panel>
                <Panel className='border border-8 max-w-sm m-2'>
                    <img style={{ maxHeight: '300px' }} src={food_intro} className='rounded-md'/>
                    <p className='recipe-title font-sans font-semi-bold text-2xl'>Search your Recipe</p>
                    <p className='font-sans font-semibold'>Filter through your collection by name, ingredient, or cuisine.</p>
                </Panel>
                <Panel className='border border-8 max-w-sm m-2'>
                    <img style={{ maxHeight: '300px' }} src={food_intro} className='rounded-md'/>
                    <p className='recipe-title font-sans font-semi-bold text-2xl'>Save your favs</p>
                    <p className='font-sans font-semibold'>Never forget your go-to dishes again. Keep your favorite recipes at your fingertips.</p>
                </Panel>
                <Panel className='border border-8 max-w-sm m-2'>
                    <img style={{ maxHeight: '300px' }} src={food_intro} className='rounded-md'/>
                    <p className='recipe-title font-sans font-semi-bold text-2xl'>Create Collections</p>
                    <p className='font-sans font-semibold'>Create themed collections, such as "Entertaining" or "Quick Weeknight Dinners."</p>
                </Panel>
            </div>
        </div>
    )
}

export default CreateCollection