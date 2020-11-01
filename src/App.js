import React, { useState } from 'react'
import {Footer, NewTaskForm, TaskList} from './components'
import './index.css'

const App = () => {

  const [todos, setTodos] = useState([
    {id: 1, completed: false, title: 'title1'},
    {id: 2, completed: true, title: 'title2'},
    {id: 3, completed: false, title: 'title3'},
  ])

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed
        return todo
      })
    )
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const addTodos = (newTodo) => {
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addTodos={addTodos}/> 
        </header>
        <section className="main">

        {todos.length ?
          <TaskList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/> 
            :
          <p className="noTodos">There's no todos yet</p>
        }
          <Footer/>
        </section>
      </section>
  )
}

export default App