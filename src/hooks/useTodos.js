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
    const newValue = {
      id: uuidv4(),
      ...value,
    }
    setTodoCategory([newValue, ...todoCategory])
    window.localStorage.setItem(
      'todoCategory',
      JSON.stringify([newValue, ...todoCategory])
    )
  }
  const updateCategory = value => {
    const newList = todoCategory.map(obj => (obj.id === value.id ? value : obj))
    setTodoCategory(newList)
    window.localStorage.setItem('todoCategory', newList)
  }
  const newTask = obj => {
    addTask({ id: uuidv4(), ...obj })
  }

  const getCategoriesToLocalStorage = key => {
    // const toArray = data => data.split(',')
    const data = window.localStorage.getItem(key)
    return JSON.parse(data)
  }
  const listCategory = window.localStorage.getItem('todoCategory')
    ? getCategoriesToLocalStorage('todoCategory')
    : todoCategory

  return {
    todoList,
    newTask,
    updateTask,
    removeTask,
    addCategory,
    listCategory,
    updateCategory,
  }
}
