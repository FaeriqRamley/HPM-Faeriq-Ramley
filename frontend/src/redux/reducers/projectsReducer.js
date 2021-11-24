const projectsReducer = (state=[],action) => {
    switch(action.type){
        case 'GET_BOARDS':
            return action.payload;
        default:
            return state;
    }
}

export default projectsReducer;