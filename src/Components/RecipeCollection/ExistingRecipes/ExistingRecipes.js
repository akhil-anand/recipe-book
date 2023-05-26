import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RecipeCard from './RecipeCard/RecipeCard'
import { Affix, Button, Col, Grid, Input, InputGroup, Row } from 'rsuite'
import SearchIcon from '@rsuite/icons/Search';
import AddRecipe from './AddRecipe/AddRecipe'
import { getAllExistingRecipes } from '../../../Shared/commonAPICalls'

const ExistingRecipes = () => {

    const { collections } = useSelector((state) => state.CollectionSlice)
    const [filteredCollection, setFilteredCollections] = useState([])

    useEffect(() => {
        console.log(collections)
        setFilteredCollections(collections)
    }, [collections])
    

    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false)

    const handleFilter = (value) => {
        if (value?.length) {
            setFilteredCollections(collections?.filter(item => item.recipeName.includes(String(value))))
        } else {
            setFilteredCollections(collections)
        }
    }

    useEffect(() => {
        getAllExistingRecipes()
    },[])

    return (
        <div className=''>
            <AddRecipe showModal={showModal} setShowModal={setShowModal} />
            <Affix className='text-end'>
                <Button className='mx-2' onClick={() => setShowModal(true)} >Add Recipe +</Button>
            </Affix>
            <Grid>
                <Row>
                    <Col xs={4}></Col>
                    <Col xs={16}><h5 className='recipe-title font-semi-bold text-2xl'>Existing Recipes</h5></Col>
                    <Col xs={4} className='flex justify-between'>
                        <InputGroup inside>
                            <Input className='' onChange={(value) => handleFilter(value)} />
                            <InputGroup.Addon>
                                <SearchIcon />
                            </InputGroup.Addon>
                        </InputGroup>
                    </Col>
                </Row>
            </Grid>
            <div className='flex flex-wrap justify-center'>
                {filteredCollection?.map(item => <RecipeCard data={item} />)}
            </div>

        </div>
    )
}

export default ExistingRecipes