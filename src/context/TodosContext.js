import React, { useState } from 'react'

const Context = React.createContext({})

export function TodosContextProvider({ children }) {
  const [todos, setTodos] = useState([])
  const [todoCompleted, setTodoCompleted] = useState([])

  return (
    <Context.Provider
      value={{
        todos,
        setTodos,
        todoCompleted,
        setTodoCompleted,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
