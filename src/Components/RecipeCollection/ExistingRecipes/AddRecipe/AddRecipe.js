import React, { useState } from 'react'
import { Button, Form, Loader, Modal, Placeholder, Table } from 'rsuite'
import AddOutlineIcon from '@rsuite/icons/AddOutline'
import EditIcon from '@rsuite/icons/Edit';
import { checkNullUndefined } from '../../../../Shared/commonMethods';
import axios from 'axios';
import { getAllExistingRecipes } from '../../../../Shared/commonAPICalls';

const AddRecipe = (props) => {

    const [recipeData, setRecipeData] = useState({})
    const [formData, setFormData] = useState({})
    const [validated, setValidated] = useState(false)
    const [instructionData, setInstructionData] = useState(null)

    const [showLoader, setShowLoader] = useState(false)

    const [editMode, setEditMode] = useState(null)

    const handleClose = () => {
        props?.setShowModal(false)
        setValidated(false)
        setFormData({})
        setRecipeData({})
    }

    const twoWayBind = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        })
    }

    const twoWayBindInstruction = (key, value, index) => {

        setValidated(false)

        const arrayCopy = formData?.[key] ?? []
        if (arrayCopy[index]) {
            arrayCopy.splice(index, 1, value)
        } else {
            arrayCopy.push(value)
        }
        twoWayBind(key, arrayCopy, setFormData)
        setInstructionData(null)
        setEditMode(null)
    }

    const addStep = () => {
        const tempData = recipeData?.steps?.length ? [...recipeData?.steps] : []
        tempData.push(formData)
        setRecipeData({ ...recipeData, steps: tempData })
        setFormData({})
    }

    const addRecipe = () => {
        setShowLoader(true)
        return axios.post('https://drab-cyan-jellyfish-wrap.cyclic.app/api/addRecipe', recipeData)
            .then((response) => {                
                getAllExistingRecipes().then(() => setShowLoader(false))
            })
            .catch((error) => {
                setShowLoader(false)
                console.log(error)
            })
    }

    return (
        <>
            <Modal open={props?.showModal} onClose={handleClose}>
            {showLoader ? <Loader className='z-50' backdrop size='lg' content="loading..." vertical /> : null}
                <Modal.Header>
                    <Modal.Title>Add Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control
                                placeholder="Recipe Name"
                                value={recipeData?.recipeName ?? ''}
                                onChange={value => { setRecipeData({ ...recipeData, recipeName: value }) }}
                                errorMessage={validated && !recipeData?.recipeName ? 'This field is required' : null}
                            />
                        </Form.Group>
                        <div className='flex'>
                            <Form.Group>
                                <Form.Control
                                    placeholder="Step Name"
                                    value={formData?.stepName ?? ''}
                                    onChange={value => { twoWayBind('stepName', value, setFormData); setValidated(false) }}
                                    errorMessage={validated && !formData?.stepName ? 'This field is required' : null}
                                />
                            </Form.Group>

                        </div>
                        {formData?.instructions?.length ?
                            <div className='flex justify-between'>
                                <div>
                                    {formData?.instructions?.map((item, index) => <>
                                        <div className={`flex justify-between ${!checkNullUndefined(editMode) && editMode == index ? 'bg-red-300' : ''}`}>
                                            <p>{index + 1}. {item}</p>
                                            <EditIcon role="button" onClick={() => {
                                                if (checkNullUndefined(editMode)) {
                                                    setEditMode(index); setInstructionData(item)
                                                } else {
                                                    setEditMode(null); setInstructionData(null)
                                                }
                                            }} />
                                        </div>
                                    </>
                                    )}
                                </div>
                                <div>
                                    <Button onClick={addStep} size="xs">Add Step</Button>
                                </div>
                                <div></div>
                            </div>
                            : null}
                        <div className='flex'>
                            <Form.Group>
                                <Form.Control
                                    placeholder="Add Instruction"
                                    value={instructionData ?? ''}
                                    onChange={value => { setInstructionData(value); setValidated(false) }}
                                    errorMessage={validated && !instructionData?.length ? 'This field is required' : null}
                                />
                            </Form.Group>
                            <Button role='button' size='xs' className='m-2' onClick={() => instructionData?.length ? twoWayBindInstruction('instructions', instructionData, editMode) : setValidated(true)} >
                                <AddOutlineIcon />
                                <span className='p-2'>Add Instruction</span>
                            </Button>

                        </div>
                    </Form>
                    <div>
                        {recipeData?.steps?.map(item => {
                            return (
                                <div>
                                    <p>{item.stepName}</p>
                                    {item.instructions?.map(instruction => <p>{instruction}</p>)}
                                </div>
                            )
                        })}
                    </div>
                    <Placeholder.Paragraph />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={addRecipe} appearance="secondary">
                        Add Recipe
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddRecipe