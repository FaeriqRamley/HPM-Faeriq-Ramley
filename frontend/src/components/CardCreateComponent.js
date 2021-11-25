import React from 'react';
import {Modal,Button, Form} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { createCard } from '../redux/actions/cardsActions';

// Modal component for card/task creation
function CardCreateComponent(props) {
    const {show,handleClose,listInfo} = props;
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            idList: listInfo.idList,
            name: e.target.formName.value,
            desc: e.target.formDesc.value
        }
        
        dispatch(createCard(newTask));
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Create New Task in <span className='text-primary'>{listInfo.name}</span></Modal.Title>
            </Modal.Header>

            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className='my-2' controlId='formName'>
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control type='text' placeholder='Task display name'></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-2' controlId='formDesc'>
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control type='text' placeholder='Description of the task'></Form.Control>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button type='submit' variant="primary" onClick={handleClose}>Save changes</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default CardCreateComponent;
