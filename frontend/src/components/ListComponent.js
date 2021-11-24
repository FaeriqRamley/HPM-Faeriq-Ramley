import React from 'react'

function ListComponent(props) {
    return (
        <div className='border text-break m-2' style={{width:'400px'}}>
            <h1 className='display-6'>{props.item.name}</h1>
        </div>
    )
}

export default ListComponent;
