import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import ProjectCardComponent from '../components/ProjectCardComponent';
import { getLatestBoards } from '../redux/actions/projectsActions';

function DashboardPage() {
    const boardList = useSelector(state => state.projects);
    const user = useSelector(state=> state.user);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getLatestBoards(user.dbUUID));
    },[dispatch,user.dbUUID])
    return (
        <div className='container px-3 mx-auto my-2'>
            <h2 className='display-3'>Project Dashboard</h2>
            <div className='row'>
                {boardList.map((item,index) => 
                    <ProjectCardComponent key={index} item={item}/>
                )}
            </div>
        </div>
    )
}

export default DashboardPage;
