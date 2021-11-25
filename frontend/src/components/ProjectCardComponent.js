import React from 'react';
import {useNavigate} from 'react-router-dom';
import ProjectCardStyle from './ProjectCard.module.css'

function ProjectCardComponent(props) {
    const navigate = useNavigate();

    const handleOnClick = (e) => {
        e.preventDefault();
        navigate(`/dashboard/${props.item.idBoard}`);
    }
    return (
        <div className={`border border-dark rounded shadow col-3 text-break mx-3 my-4 ${ProjectCardStyle.projCard}`} onClick={handleOnClick}>
            <h2 className='fs-4 mt-1'>{props.item.boardName}</h2>
            <p className={`${ProjectCardStyle.projDesc}`}>{props.item.description}</p>
        </div>
    )
}

export default ProjectCardComponent;
