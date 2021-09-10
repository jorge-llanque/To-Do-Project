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

  const addCategory = value => {
    setTodoCategory([value.category, ...todoCategory])
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
