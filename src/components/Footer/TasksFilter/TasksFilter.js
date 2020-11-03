import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import './TasksFilter.css'

const TasksFilter = ({ status, setStatus, filtersBtn }) => {

  const statusHandler = (e) => {
    const {text} = e.target.dataset
    setStatus(text)
  }

  return (
    <>
      <ul className="filters">
        {filtersBtn.map(buttonText => (
          <li key={uuidv4()}>
            <button
              onClick={statusHandler}
              className={status === buttonText ? 'selected': ''}
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

export default TasksFilter
