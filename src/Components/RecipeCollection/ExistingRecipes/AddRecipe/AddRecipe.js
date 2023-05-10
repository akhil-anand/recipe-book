import React, { useState } from 'react'
import { Button, Form, Modal, Placeholder, Table } from 'rsuite'
import AddOutlineIcon from '@rsuite/icons/AddOutline'
import EditIcon from '@rsuite/icons/Edit';
import { checkNullUndefined } from '../../../../Shared/commonMethods';

const AddRecipe = (props) => {

    const [formData, setFormData] = useState({})
    const [validated, setValidated] = useState(false)
    const [instructionData, setInstructionData] = useState(null)

    const [editMode, setEditMode] = useState(null)

    const handleClose = () => {
        props?.setShowModal(false)
        setValidated(false)
        setFormData({})
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

    return (
        <Modal open={props?.showModal} onClose={handleClose}>
            <Modal.Header>
                <Modal.Title>Add Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control
                            placeholder="Add Step"
                            value={formData?.stepName ?? ''}
                            onChange={value => { twoWayBind('stepName', value, setFormData); setValidated(false) }}
                            errorMessage={validated && !formData?.stepName ? 'This field is required' : null}
                        />
                    </Form.Group>
                    {formData?.instructions?.length ?
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
                        <AddOutlineIcon className='m-2' onClick={() => instructionData?.length ? twoWayBindInstruction('instructions', instructionData, editMode) : setValidated(true)} />
                        <div>
                            <Button size="xs">Add Step</Button>
                        </div>
                    </div>
                </Form>
                <Placeholder.Paragraph />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} appearance="primary">
                    Ok
                </Button>
                <Button onClick={handleClose} appearance="subtle">
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddRecipe