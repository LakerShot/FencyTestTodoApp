import React from 'react'
import PropTypes from 'prop-types'
import './TasksFilter.css'
import { v4 as uuidv4 } from 'uuid'

const TasksFilter = ({ status = 'All', setStatus, filtersBtn = [] }) => {
  const statusHandler = (e) => {
    const { text } = e.target.dataset
    setStatus(text)
  }

  return (
    <>
      <ul className="filters">
        {filtersBtn.map((buttonText) => (
          <li key={uuidv4()}>
            <button
              onClick={statusHandler}
              className={status === buttonText ? 'selected' : ''}
              data-text={buttonText}
            >
              {buttonText}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

TasksFilter.propTypes = {
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
  filtersBtn: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TasksFilter
