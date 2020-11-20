import React, { Component } from 'react'
import { connect } from 'react-redux'
 
class CreateTodo extends Component {

  state = {
    todo: ''
  }

  handleChange = e => {
    this.setState({todo: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.todo} />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const addTodo = todo => {
  return {type: 'ADD_TODO', payload: todo}
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)) 
  }
}
 
export default connect(null, mapDispatchToProps)(CreateTodo);
