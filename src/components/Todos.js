import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function Todos() {
  const [todo, setTodo] = useState([])

  const addTodo = task => {
    setTodo([task, ...todo])
  }
  const updateTodo = newTask => {
    const newTodo = todo.map(obj => (newTask.id === obj.id ? newTask : obj))
    setTodo(newTodo)
  }
  const removeTodo = id => {
    const newTodoList = todo.filter(todoId => todoId.id !== id)
    setTodo(newTodoList)
  }

  return (
    <main>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </main>
  )
}
