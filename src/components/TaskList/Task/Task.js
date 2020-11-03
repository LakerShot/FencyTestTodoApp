import React, { useState } from 'react'
import './Task.css'

const Task = ({ todo, onChangeTodo, removeTodo, editTodo }) => {
  const [title, setTitle] = useState(todo.title)

  let result = ''

  if (todo.completed) {
    result = 'completed'
  } else if (todo.isEditing) {
    result = 'editing'
  }

  const handlePressHandler = (e) => {
    if (e.charCode === 13 && title.trim() !== '') {
      editTodo(todo.id, title)
    }
  }

  return (
    <>
      <li className={result}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={() => onChangeTodo(todo.id)}
            checked={todo.completed}
          />
          <label>
            <span className="description">{todo.title}</span>
            <span className="created">created {todo.createdAt} ago</span>
          </label>
          <button 
            className="icon icon-edit"
            onClick={() => editTodo(todo.id, title)}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={() => removeTodo(todo.id)}
          ></button>
        </div>
        {todo.isEditing &&
          <input
            type="text"
            className="edit"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyPress={handlePressHandler}
          />
        }
      </li>
    </>
  )
}


export default Task