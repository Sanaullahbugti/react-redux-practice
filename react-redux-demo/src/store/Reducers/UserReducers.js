function User(state={name:"darshan"},action){
    switch(action.type){
        case "ADD_USER":
            return {
                ...state,
                result:"USER_ADDED"
            }
        case "DELETE_USER":
            return{
                ...state,
                return:"USER_DELETED"
            }
        default:
            return state
    }
}
export default User;