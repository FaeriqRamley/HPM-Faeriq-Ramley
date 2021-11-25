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

export const updateCard = (newUpdatedCard) => {

    return async function updateCardThunk(dispatch,getState){
        try {
            const res = await fetch(
                'http://localhost:5000/cards/updateTask',
                {
                    method:'PUT',
                    headers:{'Content-Type':'application/json'},
                    body: JSON.stringify(newUpdatedCard)
                }
            )
            const {updatedCard} = await res.json();
            console.log('card updated in db');
            console.log(updatedCard);
            dispatch({type:'UPDATE_CARD',payload:updatedCard});
        } catch(err){
            console.error(err);
        }
    }    
}

export const archiveCard = (idCard) => {
    
    return async function archiveCardThunk(dispatch,getState){
        try {
            const res = await fetch(
                `http://localhost:5000/cards/archiveTask`,
                {
                    method: 'DELETE',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({idCard})
                }
            )
            const {deletedCard} = await res.json();
            console.log('card archived');
            console.log(deletedCard);
            dispatch({type:'ARCHIVE_CARD',payload:deletedCard});
        } catch(err){
            console.error(err);
        }
    }
}