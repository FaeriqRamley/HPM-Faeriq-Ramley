import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { getBoardLists } from '../redux/actions/listsActions';
import { getBoardCards } from '../redux/actions/cardsActions';
import ListComponent from '../components/ListComponent';

function ProjectPage() {
    const params = useParams();
    const lists = useSelector(state => state.lists);
    const projects = useSelector(state => state.projects);
    const [projName,setProjName] = useState('');
    const dispatch = useDispatch();

    // Get lists and cards of board on render
    useEffect(() => {
        dispatch(getBoardLists(params.projectId));
        dispatch(getBoardCards(params.projectId));
        for(const project of projects){
            if (project.idBoard === params.projectId){
                console.log('project found');
                setProjName(project.boardName);
            }
        }
    }, [dispatch,params.projectId,projects])

    return (
        <div className='container-fluid' style={{height:'85vh'}}>
            <div style={{height:'10vh'}}>
                <h1 className='display-4 my-2'>{projName}</h1>
            </div>
            <hr/>
            <div className='d-flex align-items-stretch' style={{overflow:'auto',height:'76vh'}}>
                {lists.map((item,index)=>
                    <ListComponent key={index} item={item}/>
                )}
            </div>
        </div>
    )
}

export default ProjectPage
