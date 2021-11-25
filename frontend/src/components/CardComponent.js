import React,{useState} from 'react'
import CardDetailsComponent from './CardDetailsComponent';
import styles from './Card.module.css';

// Component to display Task Cards on the List component
function CardComponent(props) {
    const {card} = props;
    const [show,setShow] = useState(false)

    const handleShow = (e) => setShow(true);
    const handleClose = (e) => setShow(false);

    return (
        <div className={`container shadow-sm border border-info rounded mx-1 my-3 ${styles.taskCard}`}>
            <div className='row'>
                <p>{card.name}</p>
            </div>
            <div className='row justify-content-end'>
                <div className='col-6 text-center my-1'>
                    <button className='btn btn-success' onClick={handleShow}>Details</button>
                </div>
            </div>
            <CardDetailsComponent handleClose={handleClose} show={show} card={card} listInfo={props.listInfo}/>
        </div>
    )
}

export default CardComponent;