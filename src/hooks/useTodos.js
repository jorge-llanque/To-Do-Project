import { useContext } from 'react'
import TodosContext from '../context/TodosContext'

export default function useTodos() {
  const { todoList, addTask, updateTask, removeTask } = useContext(TodosContext)
  return {
    todoList,
    addTask,
    updateTask,
    removeTask,
  }
}
