import React from 'react'

function CardComponent(props) {
    const {card} = props;
    return (
        <div className='container border m-1'>
            <div className='row'>
                <p>{card.name}</p>
            </div>
            <div className='row justify-content-end'>
                <div className='col-6 text-center my-1'>
                    <button className='btn btn-success'>Details</button>
                </div>
            </div>
        </div>
    )
}

export default CardComponent;