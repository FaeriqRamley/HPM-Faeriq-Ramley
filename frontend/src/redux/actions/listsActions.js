export const getBoardLists = (idBoard) => {
    return async function getBoardListsThunk(dispatch,getState){
        console.log('getstate',getState());
        dispatch({type:'CLEAR_PROJECT_LISTS'});
        try {
            await fetch(`http://localhost:5000/lists/syncBoardList/${idBoard}`);
            console.log('list update success');

            const res = await fetch(`http://localhost:5000/lists/getBoardLists/${idBoard}`);
            const res_data = await res.json();
            dispatch({type:'GET_PROJECT_LISTS',payload:res_data});
        } catch (err) {
            console.log(err);
        }
        
    }
}