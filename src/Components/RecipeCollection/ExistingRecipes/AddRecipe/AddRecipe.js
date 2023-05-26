import React, { useState } from 'react'
import { Button, Form, Loader, Modal, Placeholder, Table, Timeline } from 'rsuite'
import { checkNullUndefined } from '../../../../Shared/commonMethods';
import axios from 'axios';
import { getAllExistingRecipes } from '../../../../Shared/commonAPICalls';

import AddOutlineIcon from '@rsuite/icons/AddOutline'
import EditIcon from '@rsuite/icons/Edit';

const AddRecipe = (props) => {

    const [recipeData, setRecipeData] = useState({})
    const [formData, setFormData] = useState({})
    const [validated, setValidated] = useState(false)
    const [instructionData, setInstructionData] = useState(null)

    const [showLoader, setShowLoader] = useState(false)

    const [editInstruction, setEditInstruction] = useState(null)
    const [editStep, setEditStep] = useState(null)

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
        setEditInstruction(null)
    }

    const addInstruction = () => {
        if (instructionData?.length) {
            twoWayBindInstruction('instructions', instructionData, editInstruction)
        } else {
            setValidated(true)
        }
    }

    const addStep = () => {
        const tempData = recipeData?.steps?.length ? [...recipeData?.steps] : []
        if (checkNullUndefined(editStep)) {
            tempData.push(formData)
        } else {
            tempData.splice(editStep, 1, formData)
        }
        setRecipeData({ ...recipeData, steps: tempData })
        setFormData({})
        setEditStep(null)
    }

    const addRecipe = () => {
        if (recipeData?.recipeName?.length && recipeData?.steps?.length) {
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
        setValidated(true)
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
                            {formData?.instructions?.length ?
                                <div>
                                    <Button onClick={addStep} size="md"><AddOutlineIcon /> &nbsp; {checkNullUndefined(editStep) ? 'Add' : 'Update'} Step</Button>
                                </div> : null}
                        </div>
                        {formData?.instructions?.length ?
                            <div className='flex justify-between'>
                                <div>
                                    {formData?.instructions?.map((item, index) => <>
                                        <div className={`flex justify-between ${!checkNullUndefined(editInstruction) && editInstruction == index ? 'bg-red-300' : ''}`}>
                                            <p>{index + 1}. {item}</p>
                                            <EditIcon role="button" onClick={() => {
                                                if (checkNullUndefined(editInstruction)) {
                                                    setEditInstruction(index); setInstructionData(item)
                                                } else {
                                                    setEditInstruction(null); setInstructionData(null)
                                                }
                                            }} />
                                        </div>
                                    </>
                                    )}
                                </div>
                            </div>
                            : null}
                        <div className='flex mt-3'>
                            <Form.Group>
                                <Form.Control
                                    placeholder="Add Instruction"
                                    value={instructionData ?? ''}
                                    onChange={value => { setInstructionData(value); setValidated(false) }}
                                    onKeyDown={(event) => {
                                        if(event.key === 'Enter'){
                                            addInstruction()
                                        }
                                    }}
                                    errorMessage={validated && !instructionData?.length ? 'This field is required' : null}
                                />
                            </Form.Group>
                            <div>
                                <Button role='button' size='md' onClick={addInstruction} >
                                    <AddOutlineIcon />&nbsp; { checkNullUndefined(editInstruction) ? 'Add' : 'Update' } Instruction
                                </Button>
                            </div>

                        </div>
                    </Form>
                    <div>
                        {/* {recipeData?.steps?.map(item => {
                            return (
                                <div>
                                    <p>{item.stepName}</p>
                                    {item.instructions?.map(instruction => <p>{instruction}</p>)}
                                </div>
                            )
                        })} */}
                    </div>
                    <Timeline className='custom-timeline mt-8 font-sans font-semibold'>
                        {recipeData?.steps?.map((subItem, index) => <>
                            <Timeline.Item className={`${!checkNullUndefined(editStep) && editStep == index ? 'bg-red-300' : ''}`} dot={<span>{index + 1 >= recipeData?.steps?.length ? '🍱' : '👩‍🍳'}</span>}>
                                <p >Step {index + 1}</p>
                                <p>{subItem?.stepName} <EditIcon role='button' onClick={() => {
                                    if (checkNullUndefined(editStep)) {
                                        setEditStep(index); setFormData(subItem)
                                    } else {
                                        setEditStep(null); setFormData({})
                                    }
                                }} /></p>
                            </Timeline.Item>
                            {subItem?.instructions?.map(instruction => <Timeline.Item className={`${!checkNullUndefined(editStep) && editStep == index ? 'bg-red-300' : ''}`}><p className='text-md'>{instruction}</p></Timeline.Item>)}

                        </>
                        )

                        }
                    </Timeline>
                    {/* <Placeholder.Paragraph /> */}
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