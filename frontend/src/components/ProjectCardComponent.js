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
        <div className={`border col-3 text-break mx-3 my-1 ${ProjectCardStyle.projCard}`} onClick={handleOnClick}>
            <h2 className='fs-4'>{props.item.boardName}</h2>
            <p className={`${ProjectCardStyle.projDesc}`}>{props.item.description}</p>
        </div>
    )
}

export default ProjectCardComponent;
