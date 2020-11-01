import React, { useState } from 'react'
import { formatRelative, subDays } from 'date-fns'
import './NewTaskForm.css'

const NewTaskForm = ({ addTodos }) => {
  const [todoTitle, setTodoTitle] = useState('')

  const handlePress = (e) => {
    if (e.charCode === 13 && todoTitle.trim() !== '') {
      const newTodo = {
        title: todoTitle,
        id: Date.now(),
        completed: false,
        createdAt: formatRelative(subDays(new Date(), 0), new Date())
      }
      addTodos(newTodo)
      setTodoTitle('')
    }
  }
  return (
    <input
      onKeyPress={e => handlePress(e)}
      onChange={e => setTodoTitle(e.target.value)}
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      value={todoTitle}
    />
  )
}

export default NewTaskForm