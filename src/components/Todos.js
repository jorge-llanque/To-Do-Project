import React from 'react'
import useTodos from '../hooks/useTodos'
import TodoList from './TodoList'

export default function Todos() {
  const { handleInput, handleSubmit, removeTodo, updateTodo, todo } = useTodos()

  return (
    <main>
      <form className='Form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Write anything'
          onChange={handleInput}
        />
        <button>Add</button>
      </form>
      <TodoList todos={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </main>
  )
}
