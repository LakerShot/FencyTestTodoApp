import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import Task from './Task'
import './TaskList.css'

const TaskList = ({
  filteredTodos = [], toggleTodo, removeTodo, editTodo,
}) => (
  <>
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <Task
          todo={todo}
          key={uuidv4()}
          onChangeTodo={toggleTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  </>
)
TaskList.propTypes = {
  filteredTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
}

export default TaskList
