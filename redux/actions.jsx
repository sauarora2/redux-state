let actions = {
  addTodo: function(data) {
    return {
      type: "ADD_TODO",
      data: data
    }
  }
}

export default actions
