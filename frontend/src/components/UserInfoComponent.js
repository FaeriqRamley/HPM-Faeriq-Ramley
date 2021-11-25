import React from 'react'
import {useDispatch} from 'react-redux';
import { logoutUser } from '../redux/actions/userActions';
function UserInfoComponent(props) {
    const {user} = props;
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        console.log('clicked');
        e.preventDefault();
        dispatch(logoutUser());
    }
    return (
        <div className='container'>
            <h1 className='display-3 text-center'>User Info</h1>
            <hr/>
            <p className='fs-4 mb-1'>Username</p>
            <p className='fs-3'>{user.username}</p>

            <p className='fs-4 mb-1'>Database UUID</p>
            <p className='fs-3'>{user.dbUUID}</p>

            <p className='fs-4 mb-1'>API Key</p>
            <p className='fs-3'>{user.apiKey}</p>

            <p className='fs-4 mb-1'>API Token</p>
            <p className='fs-3'>{user.apiToken}</p>
            <hr/>
            <div className='d-flex justify-content-end'>
                <button type='button' className='btn btn-primary align-self-end fs-3' onClick={handleLogout}>Log out</button>
            </div>
        </div>
    )
}

export default UserInfoComponent;
