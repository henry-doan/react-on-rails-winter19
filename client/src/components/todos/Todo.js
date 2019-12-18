import React, { Component } from 'react';
import TodoForm from './TodoForm';

class Todo extends Component {
  state = { editing: false }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  render() {
    const { id, title, complete, deleteTodo } = this.props
    const { editing } = this.state
    return(
      <>
        <h1>{title}</h1>
        <p>
          complete:
          { complete ? 'Yes' : 'No' }
        </p>
        <button onClick={() => deleteTodo(id)}>Delete</button>
        {
          editing ? 
          <TodoForm {...this.props} toggleEdit={this.toggleEdit} />
          :
          <button onClick={() => this.toggleEdit() }>Edit</button>
        }
      </>
    )
  }
}


export default Todo;