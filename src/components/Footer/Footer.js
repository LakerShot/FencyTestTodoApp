import React from 'react'
import PropTypes from 'prop-types'
import TasksFilter from './TasksFilter'
import './Footer.css'

const Footer = ({
  itemsLeftCount, clearComplitedTodos, status = 'All', setStatus,
}) => {
  const oneOrManyTasks = itemsLeftCount > 0 ? 'task' : 'tasks'
  const filtersBtn = ['All', 'Active', 'Completed']
  return (
    <>
      <footer className="footer">
        {itemsLeftCount > 0
          ? (
            <span className="todo-count">
              {itemsLeftCount}
              {' '}
              {oneOrManyTasks}
              {' '}
              left
            </span>
          )
          : (
            <span className="todo-count">
              All
              {oneOrManyTasks}
              {' '}
              complited
            </span>
          )}

        <TasksFilter
          status={status}
          setStatus={setStatus}
          filtersBtn={filtersBtn}
        />

        <button
          className="clear-completed"
          onClick={() => clearComplitedTodos()}
          type="button"
        >
          Clear completed
        </button>
      </footer>
    </>
  )
}

Footer.propTypes = {
  itemsLeftCount: PropTypes.number.isRequired,
  clearComplitedTodos: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
}

export default Footer
