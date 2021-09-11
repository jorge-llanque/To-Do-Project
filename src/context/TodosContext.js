import React, { useState } from 'react'
import useTasks from '../hooks/useTasks'
const Context = React.createContext({})

const initialCategories = [
  { id: '1', text: 'To do' },
  { id: '2', text: 'Work' },
  { id: '3', text: 'School' },
]
export function TodosContextProvider({ children }) {
  const { todoList, addTask, updateTask, removeTask } = useTasks()
  const [todoCategory, setTodoCategory] = useState(initialCategories)
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
