import React from 'react'
import Task from './Task/Task'
import './TaskList.css'

const TaskList = ({ todos }) => {
  return (
    <>
      <ul className="todo-list">
        {todos.map(todo => (
          <Task todo={todo} key={todo.id}/>
        ))}
      </ul>
    </>
  )
}

export default TaskList