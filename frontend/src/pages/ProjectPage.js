import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { getBoardLists } from '../redux/actions/listsActions';

function ProjectPage() {
    const params = useParams();
    const lists = useSelector(state => state.lists);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBoardLists(params.projectId))
    }, [dispatch,params.projectId])

    return (
        <div>
            This is project page for projectId {params.projectId}
            {JSON.stringify(lists)}
        </div>
    )
}

export default ProjectPage
