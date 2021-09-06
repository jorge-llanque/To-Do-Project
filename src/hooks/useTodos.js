import { useState } from 'react'

export default function useTodos() {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    let task = {
      id: Math.random(),
      text: input,
    }
    let newTodo = [task, ...todo]
    setTodo(newTodo)
    setInput('')
  }

  const handleInput = e => {
    e.preventDefault()
    setInput(e.target.value)
  }
  const removeTodo = id => {
    const newTodoList = todo.filter(todoId => todoId.id !== id)
    console.log(newTodoList)
    setTodo(newTodoList)
  }

  const updateTodo = id => {
    const { text } = todo.find(obj => obj.id === id)
    setInput(text)

    let task = {
      id: id,
      text: input,
    }
    let newTodoList = todo.map(todo => (todo.id === id ? task : todo))
    setTodo(newTodoList)
  }

  return {
    handleSubmit,
    handleInput,
    removeTodo,
    updateTodo,
    todo,
  }
}
