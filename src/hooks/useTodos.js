import { useContext } from 'react'
import TodosContext from '../context/TodosContext'

export default function useTodos() {
  const {
    todoList,
    addTask,
    updateTask,
    removeTask,
    todoCategory,
    setTodoCategory,
  } = useContext(TodosContext)

  const addCategory = category => {
    setTodoCategory([category, ...todoCategory])
  }
  return {
    todoList,
    addTask,
    updateTask,
    removeTask,
    addCategory,
    todoCategory,
  }
}
