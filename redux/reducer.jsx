function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let reducer = function(state, action) {
  switch(action.type) { 
    case "ADD_TODO":
      return {
        searchresults: action.data
    }
    default:
      return state;
  }
}

export default reducer
