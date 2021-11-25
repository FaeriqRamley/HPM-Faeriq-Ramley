const cardsReducer = (state={},action) => {

    const newState = {...state};
    switch(action.type){
        case 'GET_CARDS':
            console.log('GETTING CARDS REDUCER');
            return action.payload;
        case 'CREATE_CARD':

            if (newState[action.payload.idList]){
                newState[action.payload.idList].push(action.payload);
            } else {
                newState[action.payload.idList] = [action.payload];
            }

            return newState;
        case 'UPDATE_CARD':
            console.log('running update card');
            for (let i=0;i<newState[action.payload.idList].length;i++){
                if (newState[action.payload.idList][i].idCard === action.payload.idCard){
                    newState[action.payload.idList][i] = action.payload
                }
            }

            return newState;
        case 'ARCHIVE_CARD':
            console.log('running archive card');
            for (let i=0;i<newState[action.payload.idList].length;i++){
                if(newState[action.payload.idList][i].idCard === action.payload.idCard){
                    console.log('idCard found and deleted');
                    newState[action.payload.idList].pop(i);
                    break;
                }
            }

            return newState;
        default:
            return state;
    }
}

export default cardsReducer;