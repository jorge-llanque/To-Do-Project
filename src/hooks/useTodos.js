import { useContext } from 'react'
import TodosContext from '../context/TodosContext'
import {
  addId,
  getFromLocalStorage,
  removeItemFromList,
  saveInLocalStorage,
  updateItemFromList,
} from '../utils/Methods'

export default function useTodos() {
  const { todos, setTodos, todoCompleted, setTodoCompleted } =
    useContext(TodosContext)

  const listTodos = getFromLocalStorage('todos') || todos

  const addTodo = item => {
    const newTodo = addId(item)
    setTodos([newTodo, ...todos])
    saveInLocalStorage('todos', todos, false, newTodo)
  }
  const updateTodo = (item, id) => {
    const newList = updateItemFromList({ id, ...item }, todos)
    setTodos(newList)
    saveInLocalStorage('todos', newList, true)
  }
  const removeTodo = id => {
    const newList = removeItemFromList(id, todos)
    setTodos(newList)
    saveInLocalStorage('todos', newList, true)
  }

  const addTodoCompleted = task => {
    removeTodo(task.id)
    setTodoCompleted(prev => [task, ...prev])
    saveInLocalStorage('todoCompleted', todoCompleted, false, task)
  }
  const listTodosCompleted =
    getFromLocalStorage('todoCompleted') || todoCompleted

  return {
    addTodo,
    listTodos,
    updateTodo,
    removeTodo,
    addTodoCompleted,
    listTodosCompleted,
  }
}
