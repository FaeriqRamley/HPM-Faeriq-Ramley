export const getBoardCards = (idBoard) => {
    return async function getBoardCardsThunk(dispatch){
        try {
            await fetch(`http://localhost:5000/cards/syncBoardCards/${idBoard}`);
            const res = await fetch(`http://localhost:5000/cards/getBoardTasks/${idBoard}`);
            const payload = await res.json();

            dispatch({type:'GET_CARDS',payload})
        } catch(err){
            console.error(err)
        }
    }
}

export const createCard = (newCreatedCard) => {
    return async function createCardThunk(dispatch){
        try {
            const res = await fetch(
                `http://localhost:5000/cards/createTask`,
                {
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(newCreatedCard)
                }
            )
            const {newCard} = await res.json();
            dispatch({type:'CREATE_CARD',payload:newCard})
        } catch (err) {
            console.error(err);
        }
    }
}

export const updateCard = (newUpdatedCard) => {
    return async function updateCardThunk(dispatch){
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
            dispatch({type:'UPDATE_CARD',payload:updatedCard});
        } catch(err){
            console.error(err);
        }
    }    
}

export const archiveCard = (idCard) => {
    return async function archiveCardThunk(dispatch){
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
            dispatch({type:'ARCHIVE_CARD',payload:deletedCard});
        } catch(err){
            console.error(err);
        }
    }
}