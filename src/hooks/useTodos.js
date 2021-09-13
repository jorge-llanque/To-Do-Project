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
  const updateCategory = (value, id) => {
    const newList = todoCategory.map(obj =>
      obj.id === id ? { id, ...value } : obj
    )
    setTodoCategory(newList)
    window.localStorage.setItem('todoCategory', JSON.stringify(newList))
  }

  const deleteCategory = id => {
    const newList = todoCategory.filter(obj => obj.id !== id)
    setTodoCategory(newList)
    window.localStorage.setItem('todoCategory', JSON.stringify(newList))
  }

  const getFromLocalStorage = key => {
    // const toArray = data => data.split(',')
    const data = window.localStorage.getItem(key)
    console.log(JSON.parse(data))
    return JSON.parse(data)
  }
  const listCategory = window.localStorage.getItem('todoCategory')
    ? getFromLocalStorage('todoCategory')
    : todoCategory

  const newTask = obj => {
    let task = { id: uuidv4(), ...obj }
    addTask(task)
    window.localStorage.setItem('todoList', JSON.stringify([task, ...todoList]))
  }
  const getListTodo = window.localStorage.getItem('todoList')
    ? getFromLocalStorage('todoList')
    : todoList

  const setTask = (value, id) => {
    const newTask = todoList.map(obj =>
      obj.id === id ? { id, ...value } : obj
    )
    updateTask(newTask)
    window.localStorage.setItem('todoList', JSON.stringify(newTask))
  }
  return {
    getListTodo,
    newTask,
    setTask,
    removeTask,
    addCategory,
    listCategory,
    updateCategory,
    deleteCategory,
  }
}
