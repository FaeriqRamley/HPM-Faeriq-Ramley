export const getLatestBoards = (dbUUID) => {

    return async function getLatestBoardsThunk (dispatch,getState){
        const user = getState().user;
        const {apiKey,apiToken} = user;
        try {
            await fetch(
                `http://localhost:5000/boards/syncBoards/${apiKey}/${apiToken}`,
                {
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body: JSON.stringify({_id:dbUUID})
                }
            )
            const res = await fetch(`http://localhost:5000/boards/getUserBoards/${dbUUID}`);
            const boardList = await res.json();

            dispatch({type:'GET_BOARDS',payload:boardList});
        } catch(err) {
            console.log(err);
        }
    }
}