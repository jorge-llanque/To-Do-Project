import { useContext } from 'react'
import TodosContext from '../context/TodosContext'
import { v4 as uuidv4 } from 'uuid'

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
  const newTask = obj => {
    addTask({ id: uuidv4(), ...obj })
  }
  return {
    todoList,
    newTask,
    updateTask,
    removeTask,
    addCategory,
    todoCategory,
  }
}
