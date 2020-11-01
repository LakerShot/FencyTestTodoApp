import React, { useContext, useState } from 'react'

export const MyContext = React.createContext()

export function useMyContext() {
  return useContext(MyContext)
}

function ContextWrapper({ children }) {

  const [mockTodo, setMockTodo] = useState([
    {id: 1, completed: false, title: 'title1'},
  ])

  return (
    <MyContext.Provider value={
      mockTodo
    }>
      {children}
    </MyContext.Provider>
  )
}

export default ContextWrapper