import {combineReducers} from 'redux';
import projectsReducer from './projectsReducer';
import userReducer from './userReducer';
import listsReducer from './listsReducer';
import cardsReducer from './cardsReducer';

const rootReducer = combineReducers({
    user: userReducer,
    projects: projectsReducer,
    lists: listsReducer,
    cards: cardsReducer
});

export default rootReducer;