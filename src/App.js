import React from 'react'
import {Footer, NewTaskForm, TaskList} from './components'
import './index.css'

const App = () => {
  const todos = [
    {id: 1, completed: false, title: 'title1'},
    {id: 2, completed: true, title: 'title2'},
    {id: 3, completed: false, title: 'title3'},
  ]
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm/> 
      </header>
      <section className="main">
        <TaskList todos={todos}/>
        <Footer/>
      </section>
    </section>
  )
}

export default App