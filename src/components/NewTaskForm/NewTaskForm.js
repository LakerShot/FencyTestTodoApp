import React, { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { v4 as uuidv4 } from 'uuid';
import './NewTaskForm.css'

const NewTaskForm = ({ addTodos }) => {
  const [todoTitle, setTodoTitle] = useState('')

  const handlePress = (e) => {
    if (e.charCode === 13 && todoTitle.trim() !== '') {
      const newTodo = {
        title: todoTitle,
        id: uuidv4(),
        completed: false,
        isEditing: false,
        createdAt: formatDistanceToNow(new Date())
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