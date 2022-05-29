import React, { Component } from 'react'
import './Todo1.css'
import TaskActive from './ActiveTask';

class Todo1lst extends Component {
  render() {
    return (
        <>
        <div className='outerone'>
            <div className="container">
        <h1 className="text-center">todos</h1>
      </div>
      <form className="todoInput">
        <input
          className="input"
          type="text"
          placeholder="What needs to be done?"
        />
        </form>
        <div className="cards">
            <TaskActive />
        </div>
        </div>
      </>
      
    )
  }
}


export default Todo1lst;