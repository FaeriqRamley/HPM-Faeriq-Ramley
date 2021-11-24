const listsReducer = (state=[],action) => {
    switch(action.type){
        case 'GET_PROJECT_LISTS':
            return action.payload;
        case 'CLEAR_PROJECT_LISTS':
            return [];
        default:
            return state;
    }
}

export default listsReducer;