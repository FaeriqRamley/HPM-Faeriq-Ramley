import React,{useState} from 'react'
import {useSelector} from 'react-redux';
import CardComponent from './CardComponent';
import CardCreateComponent from './CardCreateComponent';

// Component to display Lists in projects page
function ListComponent(props) {
    const cards = useSelector(state=>state.cards);
    const listCards = cards[props.item.idList];
    const [show,setShow] = useState(false)

    const handleShow = (e) => setShow(true);
    const handleClose = (e) => setShow(false);


    return (
        <div className='text-break m-2' style={{minWidth:'350px'}}>
            <h1 className='display-6 align-middle'>
                <span className='text-primary'>{props.item.name}</span>
                <button type='button' className='btn btn-outline-primary mx-2' style={{minWidth:'80px'}} onClick={handleShow}>+</button>
            </h1>
            {listCards &&
                listCards.length !== 0 ? listCards.map((card,index)=>
                    <CardComponent key={index} card={card} listInfo={props.item}/>
                ) :
                <div>
                    <p>No tasks in this list.</p>
                    <p>Click the button above to add one.</p>
                </div>
                
            }
            <CardCreateComponent handleClose={handleClose} listInfo={props.item} show={show}/>
        </div>
    )
}

export default ListComponent;
