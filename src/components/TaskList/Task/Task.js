import React, { useState } from 'react'
import './Task.css'

const Task = ({ todo, onChangeTodo, removeTodo }) => {
  // const [title, setTitle] = useState(todo.title)
  // console.log(title)
  return (
    <>
      <li className={todo.completed ? "completed" : ''}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={() => onChangeTodo(todo.id)}
            checked={todo.completed}
          />
          <label>
            <span className="description">{todo.title}</span>
            <span className="created">{todo.createdAt}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button
            className="icon icon-destroy"
            onClick={() => removeTodo(todo.id)}
          ></button>
        </div>
      </li>
    </>
  )
}

export default Task