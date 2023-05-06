import React from 'react'
import { Timeline } from 'rsuite'
import ListIcon from '@rsuite/icons/List';
import CreditCardIcon from '@rsuite/icons/legacy/CreditCard';

const OrganizeKitchen = () => {
    return (
        <div className='recipe-div rounded-md shadow-xl p-10'>
            <h5 className='recipe-title text-6xl text-start'>Organize Your Kitchen</h5>
            <Timeline className='custom-timeline mt-8 font-sans font-semibold'>
                <>
                    <Timeline.Item dot={<span>👩‍🍳</span>}>
                        <p>Grocery List</p>
                        <p className='text-md'>Add ingredients directly from your recipes to your grocery list. No more forgotten ingredients!</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p className='text-sm'>Add ingredients directly from your recipes</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p className='text-sm'>Add ingredients directly from your recipes</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p className='text-sm'>Add ingredients directly from your recipes</p>
                    </Timeline.Item>
                </>
                <>
                    <Timeline.Item dot={<span>👩‍🍳</span>}>
                        <p>Cooking Mode</p>
                        <p className='text-md'>Follow recipes step-by-step with our cooking mode, which highlights each step and keeps track of progress</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p className='text-sm'>Add ingredients directly from your recipes</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p className='text-sm'>Add ingredients directly from your recipes</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p className='text-sm'>Add ingredients directly from your recipes</p>
                    </Timeline.Item>
                </>
                <>
                    <Timeline.Item dot={<span>🍱</span>}>
                        <p>Meal Planner</p>
                        <p className='text-md'>Plan your weekly meals and get customized shopping lists based on the recipes you select.</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p className='text-sm'>Add ingredients directly from your recipes</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p className='text-sm'>Add ingredients directly from your recipes</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p className='text-sm'>Add ingredients directly from your recipes</p>
                    </Timeline.Item>
                </>
            </Timeline>
        </div>
    )
}

export default OrganizeKitchen