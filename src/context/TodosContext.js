import React from 'react'
import useTodos from '../hooks/useTodos'
const Context = React.createContext({})

export function TodosContextProvider({ children }) {
  const { todoList, addTask, updateTask, removeTask } = useTodos()
  return (
    <Context.Provider value={{ todoList, addTask, updateTask, removeTask }}>
      {children}
    </Context.Provider>
  )
}

export default Context
