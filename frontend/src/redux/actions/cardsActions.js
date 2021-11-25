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