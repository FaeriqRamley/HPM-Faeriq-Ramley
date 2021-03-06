const cardsReducer = (state={},action) => {

    const newState = {...state};
    switch(action.type){
        case 'GET_CARDS':
            return action.payload;
        case 'CREATE_CARD':
            console.log('create card reducer running');
            if (newState[action.payload.idList]){
                newState[action.payload.idList].push(action.payload);
            } else {
                newState[action.payload.idList] = [action.payload];
            }

            return newState;
        case 'UPDATE_CARD':
            for (const [idList,cardsArr] of Object.entries(newState)){
                for (let i=0;i<cardsArr.length;i++){
                    if (cardsArr[i].idCard === action.payload.idCard){
                        console.log('card found');
                        // found the previous card to be replaced
                        if (cardsArr[i].idList === action.payload.idList){
                            // if updated card is in the same list as previous
                            console.log('card did not move from')
                            newState[idList][i] = action.payload;
                            return newState;
                        } else {
                            // if updated card is not in the same list as previous,remove old entry and add payload to new card
                            newState[idList].splice(i,1);
                            if (newState[action.payload.idList]){
                                newState[action.payload.idList].push(action.payload);
                                return newState;
                            } else {
                                newState[action.payload.idList] = [action.payload];
                                return newState;
                            }
                        }
                    }
                }
            }

            return newState;
        case 'ARCHIVE_CARD':
            for (let i=0;i<newState[action.payload.idList].length;i++){
                if(newState[action.payload.idList][i].idCard === action.payload.idCard){
                    console.log('idCard found and deleted');
                    newState[action.payload.idList].pop(i);
                    break;
                }
            }

            return newState;
        case 'CLEAR_ALL_CARDS':
            return {};
        default:
            return state;
    }
}

export default cardsReducer;