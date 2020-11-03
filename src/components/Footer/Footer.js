import React from 'react'
import TasksFilter from './TasksFilter'
import './Footer.css'

const Footer = ({ itemsLeftCount, clearComplitedTodos, status, setStatus}) => {
  const oneOrManyTasks = itemsLeftCount > 0 ? 'task' : 'tasks'
  const filtersBtn = ['All', 'Active', 'Completed']
  return (
    <>
      <footer className="footer">
          {itemsLeftCount > 0 ?
            <span className="todo-count">{itemsLeftCount} {oneOrManyTasks} left</span>
              :
            <span className="todo-count">All {oneOrManyTasks} complited</span>
          }

          <TasksFilter
            status={status}
            setStatus={setStatus}
            filtersBtn={filtersBtn}
          />

        <button
          className="clear-completed"
          onClick={() => clearComplitedTodos()}
        >
          Clear completed
        </button>
      </footer>
    </>
  )
}

export default Footer
