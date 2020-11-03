import React from 'react'
import Task from './Task'
import { v4 as uuidv4 } from 'uuid';
import './TaskList.css'

const TaskList = ({ filteredTodos, toggleTodo, removeTodo, editTodo }) => {
  return (
    <>
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <Task
            todo={todo}
            key={uuidv4()}
            onChangeTodo={toggleTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </>
  )
}

export default TaskList