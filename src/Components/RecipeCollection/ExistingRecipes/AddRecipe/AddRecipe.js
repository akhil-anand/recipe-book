import React from 'react'
import { Button, Modal, Placeholder } from 'rsuite'

const AddRecipe = (props) => {

    const handleClose = () => {
        props?.setShowModal(false)
    }

    return (
        <Modal open={props?.showModal} onClose={handleClose}>
            <Modal.Header>
                <Modal.Title>Add Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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