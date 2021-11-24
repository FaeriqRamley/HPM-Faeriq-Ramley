import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getLatestBoards } from '../redux/actions/projectsActions';

function DashboardPage() {
    const boardList = useSelector(state => state.projects);
    const user = useSelector(state=> state.user);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getLatestBoards(user.dbUUID));
    },[])
    return (
        <div className='container px-1 mx-auto'>
            This is dashboard
            {boardList.map((item) => 
                <div className='border w-90'>
                    <h2 className='display-5'>{item.boardName}</h2>
                    <p className='fs-4'>{item.description}</p>
                </div>
            )}
        </div>
    )
}

export default DashboardPage;
