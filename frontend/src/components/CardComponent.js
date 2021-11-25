import React,{useState} from 'react'
import CardDetailsComponent from './CardDetailsComponent';

function CardComponent(props) {
    const {card} = props;
    const [show,setShow] = useState(false)

    const handleShow = (e) => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className='container border m-1'>
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