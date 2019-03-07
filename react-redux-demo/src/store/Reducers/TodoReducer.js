import TodoAction from "../Actions/todoActions";

function Todo(
  state = {
    title: "todo1"
  },
  action
) {
  switch (action.type) {
      case TodoAction.GET_TODO:
            return{
                ...state,
                text:"TODO_ADDED"
            }
        case TodoAction.GET_TODO_SUCCESSFUL:
            return{
                ...state,
                text:"GET_TODO_SUCCESSFUL"
            }
        default:
            return state
  }
}
export default Todo;