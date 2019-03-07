import { createStore,combineReducers } from "redux";
function Todo(state={
    name:"Todo1"
},action){
switch(action.type){
    case "ADD_TODO":
        return{
            ...state,
            text:"TODO ADDED"
        }
    case "DELETE_TODO":
        return{
            ...state,
            text:"TODO DELETED"
        }
    default:
        return{
            ...state
        }
}
}
function User(state={
    name:"Sanaullah"
},action){
switch(action.type){
    case "ADD_USER":
        return{
            ...state,
            user:"USER ADDED"
        }
    case "DELETE_USER":
        return{
            ...state,
            user:"USER DELETED"
        }
    default:
        return{
            ...state
        }
}
}
const rootReducer = combineReducers({
    Todo,
    User
})
const store=createStore(rootReducer,{});
// store.dispatch({
//     type:"ADD_TODO"
// })


export default store;