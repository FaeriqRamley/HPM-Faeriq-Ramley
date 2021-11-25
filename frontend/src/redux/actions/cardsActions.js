export const getBoardCards = (idBoard) => {

    return async function getBoardCardsThunk(dispatch,getState){
        
        try {
            await fetch(`http://localhost:5000/cards/syncBoardCards/${idBoard}`);
            const res = await fetch(`http://localhost:5000/cards/getBoardTasks/${idBoard}`);
            const payload = await res.json();

            console.log('retrieved cards:',payload)
            dispatch({type:'GET_CARDS',payload})
        } catch(err){
            console.error(err)
        }


    }

}