import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { archiveCard } from '../redux/actions/cardsActions';

function CardDetailsComponent(props) {
    const {card, listInfo, show, handleClose} = props;
    const dispatch = useDispatch();

    const handleArchive = (e) => {
        e.preventDefault();
        dispatch(archiveCard(card.idCard));
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1 className='display-6'>{card.name}</h1>
                <p className='fs-6 mb-0'>Description</p>
                <p className='fs-6 mb-1'>{card.description === '' ? '-':card.description}</p>
                <p className='fs-6 mb-0'>List</p>
                <p className='fs-6 mb-1'>{listInfo.name}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Update
                </Button>
                <Button variant="danger" onClick={handleArchive}>
                    Archive
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CardDetailsComponent;
