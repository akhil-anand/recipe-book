import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RecipeCard from './RecipeCard/RecipeCard'
import { Affix, Button, Col, Grid, Input, InputGroup, Loader, Row } from 'rsuite'
import SearchIcon from '@rsuite/icons/Search';
import AddRecipe from './AddRecipe/AddRecipe'
import { getAllExistingRecipes } from '../../../Shared/commonAPICalls'

const ExistingRecipes = () => {

    const { collections } = useSelector((state) => state.CollectionSlice)
    const [filteredCollection, setFilteredCollections] = useState([])

    const [showLoader, setShowLoader] = useState(false)

    useEffect(() => {
        console.log(collections)
        setFilteredCollections(collections)
    }, [collections])
    

    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false)

    const handleFilter = (value) => {
        if (value?.length) {
            setFilteredCollections(collections?.filter(item => item.recipeName.toLowerCase().includes(value.toLowerCase())))
        } else {
            setFilteredCollections(collections)
        }
    }

    useEffect(() => {
        setShowLoader(true)
        getAllExistingRecipes().then(() => setShowLoader(false))
    },[])

    return (
        <div className=''>
            {showLoader ? <Loader className='z-50' backdrop size='lg' content="loading..." vertical /> : null }
            <AddRecipe showModal={showModal} setShowModal={setShowModal} />
            <Affix className='text-end'>
                <Button className='mx-2' onClick={() => setShowModal(true)} >Add Recipe +</Button>
            </Affix>
            <Grid>
                <Row>
                    <Col xs={8}></Col>
                    <Col xs={8}><h5 className='recipe-title font-semi-bold text-2xl'>Existing Recipes</h5></Col>
                    <Col xs={8} className='flex justify-between'>
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