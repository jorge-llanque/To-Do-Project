import React, { useState } from 'react'
import useTasks from '../hooks/useTasks'
const Context = React.createContext({})

export function TodosContextProvider({ children }) {
  const { todoList, addTask, updateTask, removeTask } = useTasks()
  const [todoCategory, setTodoCategory] = useState(['Todo', 'Work', 'School'])
  return (
    <Context.Provider
      value={{
        todoList,
        addTask,
        updateTask,
        removeTask,
        todoCategory,
        setTodoCategory,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
