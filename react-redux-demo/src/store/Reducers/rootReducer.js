import {combineReducers} from 'redux'
import Todo from './TodoReducer';
import User from './UserReducers';


const rootReducer = combineReducers({
    Todo,
    User
})
export default rootReducer;