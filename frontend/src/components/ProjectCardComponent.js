import React from 'react'

function ProjectCardComponent(props) {
    return (
        <div className='border w-90'>
            <h2 className='display-5'>{props.item.boardName}</h2>
            <p className='fs-4'>{props.item.description}</p>
        </div>
    )
}

export default ProjectCardComponent;
