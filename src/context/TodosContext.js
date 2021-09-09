import React from 'react'
import useTasks from '../hooks/useTasks'
const Context = React.createContext({})

export function TodosContextProvider({ children }) {
  const { todoList, addTask, updateTask, removeTask } = useTasks()
  return (
    <Context.Provider value={{ todoList, addTask, updateTask, removeTask }}>
      {children}
    </Context.Provider>
  )
}

export default Context
