import React from 'react'
import TodoListCompleted from './TodoListCompleted'
import Category from './CategoryTodos/Category'
import './styles/todos.css'
import Todo from './Todos/Todo'

export default function Todos() {
  return (
    <main className='Todo'>
      <header className='Todo__Header'>
        <h1>Title</h1>
        <img src='#' alt='#' />
      </header>
      <div className='Todo__Container'>
        <section className='Todo__Container-Categories'>
          <Category />
        </section>
        <section className='Todo__Container-Main'>
          <Todo />
        </section>
        <section className='Todo__Container-Completed'>
          <TodoListCompleted />
        </section>
      </div>
    </main>
  )
}
