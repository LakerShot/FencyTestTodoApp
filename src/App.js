import React, { useState, useEffect } from 'react'
import { Footer, NewTaskForm, TaskList } from './components'
import useLocalStorage from './hooks/useLocalStorage'
import './index.css'

const App = () => {
  const [status, setStatus] = useState('All')
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  const [storedTodos, setStoredTodos] = useLocalStorage('todos', todos)

  const itemsComplitedLength = todos.filter((todo) => todo.completed).length
  const itemsLeftCount = todos.length - itemsComplitedLength

  useEffect(() => {
    setTodos(storedTodos)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'Completed':
          setFilteredTodos(todos.filter((todo) => todo.completed))
          break
        case 'Active':
          setFilteredTodos(todos.filter((todo) => !todo.completed))
          break
        default:
          setFilteredTodos(todos)
          break
      }
    }

    filterHandler()
    setStoredTodos(todos)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status])

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return { ...todo }
    }))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const addTodos = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const editTodo = (id, changedTitle) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = !todo.isEditing
        todo.title = changedTitle
      }
      return { ...todo }
    }))
  }

  const clearComplitedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>

        <NewTaskForm addTodos={addTodos} />

      </header>
      <section className="main">

        {todos.length
          ? (
            <TaskList
              filteredTodos={filteredTodos}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          )
          : <p className="noTodos">There&apos;s no todos yet</p>}
        <Footer
          itemsLeftCount={itemsLeftCount}
          clearComplitedTodos={clearComplitedTodos}
          status={status}
          setStatus={setStatus}
        />

      </section>
    </section>
  )
}

export default App
