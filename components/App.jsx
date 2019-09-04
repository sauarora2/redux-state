import React from 'react'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import { connect } from 'react-redux'

class App extends React.Component {

  render() {
    return <div>
      <h1>Todo List</h1>
      <ToDoInput dispatch={this.props.dispatch}/>
      <ToDoList  todos={this.props.todos}/>
    </div>
  }
}

function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps)(App)
