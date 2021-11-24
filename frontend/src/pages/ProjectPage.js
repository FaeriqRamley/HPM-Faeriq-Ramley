import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { getBoardLists } from '../redux/actions/listsActions';
import ListComponent from '../components/ListComponent';

function ProjectPage() {
    const params = useParams();
    const lists = useSelector(state => state.lists);
    const projects = useSelector(state => state.projects);
    const [projName,setProjName] = useState('');
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(getBoardLists(params.projectId))
        for(const project of projects){
            if (project.idBoard === params.projectId){
                console.log('project found');
                setProjName(project.boardName);
            }
        }
    }, [dispatch,params.projectId])

    return (
        <div className='container-fluid'>
            <div>
                <h1 className='display-4 my-2'>{projName}</h1>
            </div>
            <div className='d-flex align-items-stretch' style={{overflowX:'auto',height:'90vh'}}>
                {lists.map((item,index)=>
                    <ListComponent key={index} item={item}/>
                )}
            </div>
        </div>
    )
}

export default ProjectPage
