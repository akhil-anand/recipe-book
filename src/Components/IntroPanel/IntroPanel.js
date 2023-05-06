import React from 'react'
import { Button, ButtonGroup, Col, Grid, Panel, Placeholder, Row, Sidebar, Stack } from 'rsuite'
import food_intro from '../../assets/food_intro.jpg'

import './IntroPanel.css'

const IntroPanel = () => {
    return (
        <div className='intro-div my-5'>
            <Panel className='shadow-xl recipe-div'
                bordered
                header={
                    <Grid fluid>
                        <Row>
                            <Col xs={12}>
                                <div className='flex flex-col justify-between' style={{ minHeight: '400px', padding: '40px' }}>
                                    <span style={{ marginTop: '2%' }} className='recipe-title text-start text-6xl hover:underline inline-block align-middle '>My Recipe Book 📕</span>
                                    <p className='text-start font-semibold leading-7 font-sans'>Welcome to My Recipe Book, the app that lets you save and organize all of your favorite recipes in one place. Never lose track of your go-to dish again!</p>
                                    <p>By Akhil</p>

                                </div>
                            </Col>
                            <Col xs={12} className='p-3'>
                                {/* <ButtonGroup className='float-right'>
                                    <Button active>Non-veg</Button>
                                    <Button active>Veg</Button>
                                </ButtonGroup> */}
                                <Panel bordered header={
                                    <div className='pt-1' style={{backgroundColor:'#f8d8e7'}}>
                                        <svg viewBox="0 0 400 100">
                                            <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                                            <text width="500">
                                                <textPath fill='#d0a66a' fontWeight="bold" fontFamily='' xlinkHref="#curve" className='text-4xl' style={{color:'#d0a66a'}}>
                                                    &emsp; &emsp; &nbsp;MANDY'S
                                                </textPath>
                                            </text>
                                        </svg>
                                        <p className='text-xl'>Salads</p>
                                    </div>
                                }>

                                    <img style={{ maxHeight: '300px' }} src={food_intro} />
                                    <p className='text-lg py-2 bg-orange-400'>Recipe for lettuce and life</p>
                                </Panel>
                            </Col>
                        </Row>
                    </Grid>
                }
            >






            </Panel>
        </div>
    )
}

export default IntroPanel