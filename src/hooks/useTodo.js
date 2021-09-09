import { useContext } from 'react'
import TodosContext from '../context/TodosContext'

export default function useTodo() {
  const { todoList, addTask } = useContext(TodosContext)
  return {
    todoList,
    addTask,
  }
}
