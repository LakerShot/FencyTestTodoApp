import React from 'react'
import Task from './Task'
import './TaskList.css'

const TaskList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <>
      <ul className="todo-list">
        {todos.map(todo => (
          <Task todo={todo} key={todo.id} onChangeTodo={toggleTodo} removeTodo={removeTodo}/>
        ))}
      </ul>
    </>
  )
}

export default TaskList