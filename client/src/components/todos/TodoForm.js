import React, { Component } from 'react';
import { Form, Checkbox } from 'semantic-ui-react';

class TodoForm extends Component {
  state = { title: '', complete: false }

  componentDidMount() {
    if (this.props.id) {
      const { title, complete } = this.props
      this.setState({ title, complete })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleCheck = (e) => {
    this.setState({ complete: !this.state.complete })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.update(this.props.id, this.state)
      this.props.toggleEdit()
    } else {
      this.props.addTodo(this.state)
    }
    this.setState({ title: '' })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          required
          placeholder='Add your todo here'
        />
        {
          this.props.id ?
          <Checkbox 
            checked={this.state.complete}
            name='complete'
            value={this.state.complete}
            onChange={this.handleCheck}
          />
          :
          ''
        }
        <input
          type='submit'
        />
      </Form>
    )
  }
}

export default TodoForm;