export const loginUser = (userDetails) => {

    return async function loginUserThunk(dispatch){

        try {
            const res = await fetch(
                'http://localhost:5000/users/login',
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(userDetails)
                }
            )
    
            const res_data = await res.json();
            
            if (res_data.message === 'logged in'){
                const user = res_data.user
                dispatch({type:'LOGIN_USER',payload:{
                    dbUUID: user._id,
                    username: user.username,
                    apiKey: user.apiKey,
                    apiToken: user.apiToken,
                    boardIdList: user.boardIdList
                }})
            } else {
                console.log('login failed');
            }
        } catch (err) {
            console.log(err);
        }
    };
}

export const signupUser = (userDetails) => {
    return async function signupUserThunk(){
        try {
            userDetails.boardIdList = [];
            await fetch(
                'http://localhost:5000/users/signup',
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(userDetails)
                }
            )
            console.log('user created!');
        } catch (err) {
            console.log(err)
        }
    }
}

export const logoutUser = () => {
    return async function logoutUserThunk(dispatch,getState){
        dispatch({type:'LOGOUT_USER'});
        dispatch({type:'CLEAR_BOARDS'});
        dispatch({type:'CLEAR_PROJECT_LISTS'});
        dispatch({type:'CLEAR_ALL_CARDS'});
        // console.log(getState());
    }
}