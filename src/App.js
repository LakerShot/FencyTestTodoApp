import React, { useState, useEffect } from 'react'
import {Footer, NewTaskForm, TaskList} from './components'
import './index.css'

const App = () => {
  console.log('render')
  const [status, setStatus] = useState('All')
  const [todos, setTodos] = useState([
    {id: 1, completed: false, title: 'mockTask1', isEditing: false},
    {id: 2, completed: true, title: 'mockTask2', isEditing: false},
    {id: 3, completed: false, title: 'mockTask3', isEditing: false},
  ])
  const [filteredTodos, setFilteredTodos] = useState([])

  const itemsComplitedLength = todos.filter(todo => todo.completed).length
  const itemsLeftCount = todos.length - itemsComplitedLength

  useEffect(() => {
    filterHandler()
  }, [todos, status])

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return {...todo}
      }))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const addTodos = (newTodo) => {
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const editTodo = (id, changedTitle) => {
    console.log(changedTitle)
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = !todo.isEditing
        todo.title = changedTitle
      }
      return {...todo}
    }))
  }

  const clearComplitedTodos = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const filterHandler = () => {
    switch(status) {
      case 'Completed':
        setFilteredTodos(todos.filter(todo => todo.completed))
        break
      case 'Active':
        setFilteredTodos(todos.filter(todo => !todo.completed))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>

        <NewTaskForm addTodos={addTodos}/>

      </header>
      <section className="main">

      {todos.length ?
        <TaskList
          filteredTodos={filteredTodos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
          :
        <p className="noTodos">There's no todos yet</p>
      }
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