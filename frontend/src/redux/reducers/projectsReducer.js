const projectsReducer = (state=[],action) => {
    switch(action.type){
        case 'GET_BOARDS':
            return action.payload;
        case 'CLEAR_BOARDS':
            return [];
        default:
            return state;
    }
}

export default projectsReducer;