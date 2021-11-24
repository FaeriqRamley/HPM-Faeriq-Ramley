import {combineReducers} from 'redux';
import projectsReducer from './projectsReducer';
import userReducer from './userReducer';
const rootReducer = combineReducers({
    user: userReducer,
    projects: projectsReducer
});

export default rootReducer;