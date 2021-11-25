import React,{useState} from 'react';
import {Modal,Button} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import { archiveCard,updateCard } from '../redux/actions/cardsActions';

// Modal component for more details of task
function CardDetailsComponent(props) {
    const {card, listInfo, show, handleClose} = props;
    const [edit,toggleEdit] = useState(false);
    const dispatch = useDispatch();
    const allLists = useSelector(state=>state.lists);
    // Form values and functions
    const [cardName,setCardName] = useState(card.name);
    const [cardDesc,setCardDesc] = useState(card.description);
    const [cardList,setCardList] = useState(listInfo.idList);
    const handleNameUpdate = (e) => setCardName(e.target.value);
    const handleDescUpdate = (e) => setCardDesc(e.target.value);
    const handleListUpdate = (e) => setCardList(e.target.value);

    // Update function. Cancel update button needs to be added
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(allLists);

        // Submission of Update Card function
        if(edit){
            const updatedCard = {...card, name:cardName,description:cardDesc,idList:cardList};
            console.log('dispatching',updatedCard);
            dispatch(updateCard(updatedCard));
            toggleEdit(false);

            handleClose();
        } else{
            toggleEdit(true);
        }

    }

    // Archive function to delete card
    const handleArchive = (e) => {
        e.preventDefault();
        dispatch(archiveCard(card.idCard));
        handleClose();
    }
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header style={{backgroundColor:'rgb(241, 246, 248)'}}>
                <Modal.Title>Task Details</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor:'rgb(241, 246, 248)'}}>
                <p className='fs-6 mb-0'>Task Name</p>
                {edit ? <input type='text' value={cardName} onChange={handleNameUpdate}/>: <p className='fs-5 mb-1'>{card.name}</p>}
                <p className='fs-6 mb-0'>Description</p>
                {edit ? <input type='text' value={cardDesc} onChange={handleDescUpdate}/>: <p className='fs-5 mb-1'>{card.description === '' ? '-':card.description}</p>}
                <p className='fs-6 mb-0'>List</p>
                {edit ?
                    <select value={cardList} onChange={handleListUpdate}>
                        {allLists && allLists.map((boardList,index)=>
                            <option key={index} value={boardList.idList}>{boardList.name}</option>
                        )}
                    </select>:
                    <p className='fs-5 mb-1'>{listInfo.name}</p>
                }
            </Modal.Body>
            <Modal.Footer style={{backgroundColor:'rgb(241, 246, 248)'}}>
                <Button variant={edit ? 'primary':'outline-secondary'} onClick={handleUpdate}>
                    {edit ? 'Confirm Edit':'Edit Task'}
                </Button>
                <Button variant="danger" onClick={handleArchive}>
                    Archive
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CardDetailsComponent;
