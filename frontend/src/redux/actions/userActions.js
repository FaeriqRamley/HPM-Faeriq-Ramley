export const loginUser = (userDetails) => {

    return async function loginUserThunk(dispatch,getState){

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
            console.log(res_data);
            
            if (res_data.message === 'logged in'){
                const user = res_data.user
                console.log(user._id);
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

    return async function signupUserThunk(dispatch,getState){
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