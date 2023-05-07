import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RecipeCard from './RecipeCard/RecipeCard'
import { Col, Grid, Input, InputGroup, Row } from 'rsuite'
import SearchIcon from '@rsuite/icons/Search';

const ExistingRecipes = () => {

    const { collections } = useSelector((state) => state.CollectionSlice)
    const [filteredCollection, setFilteredCollections] = useState([...collections])

    const navigate = useNavigate()

    const handleFilter = (value) => {
        if (value?.length) {
            setFilteredCollections(collections?.filter(item => item.recipeName.includes(String(value))))
        } else {
            setFilteredCollections(collections)
        }
    }

    return (
        <div className=''>
            <Grid>
                <Row>
                    <Col xs={6}></Col>
                    <Col xs={10}><h5 className='recipe-title font-semi-bold text-2xl'>Existing Recipes</h5></Col>
                    <Col xs={4}>
                        <InputGroup inside>
                        <Input className='max-w-xs' onChange={(value) => handleFilter(value)} />
                            <InputGroup.Addon>
                                <SearchIcon />
                            </InputGroup.Addon>
                        </InputGroup>
                    </Col>
                </Row>
            </Grid>
            <div className='flex flex-wrap'>
                {filteredCollection?.map(item => <RecipeCard data={item} />)}
            </div>

        </div>
    )
}

export default ExistingRecipes