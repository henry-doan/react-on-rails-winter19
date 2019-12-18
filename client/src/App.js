import React, { Component} from 'react';

class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    // make api call to the rails side to get all the todos
  }

  addTodo = () => {
    // make api call to add a todo into the rails side 
    // add the todo into the state
  }

  updateTodo = () => {
    // make api call to update a todo in the rails side
    // update todo in the state
  }

  deleteTodo = () => {
    // make api call to delete a todo on the rails side
    // delete the todo from our state
  }

  render() {
    return(
      <>

      </>
    )
  }
}

export default App;
