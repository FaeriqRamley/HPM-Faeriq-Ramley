import React from 'react'
import {useParams} from 'react-router-dom';

function ProjectPage() {
    const params = useParams();
    return (
        <div>
            This is project page for projectId {params.projectId}
        </div>
    )
}

export default ProjectPage
