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
    window.localStorage.setItem('todoCategory', [
      value.category,
      ...todoCategory,
    ])
  }
  const newTask = obj => {
    addTask({ id: uuidv4(), ...obj })
  }

  const toArray = data => data.split(',')
  const listCategory = window.localStorage.getItem('todoCategory')
    ? toArray(window.localStorage.getItem('todoCategory'))
    : todoCategory

  return {
    todoList,
    newTask,
    updateTask,
    removeTask,
    addCategory,
    listCategory,
  }
}
