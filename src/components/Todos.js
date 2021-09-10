import React from 'react'
import TodoListCompleted from './TodoListCompleted'
import Category from './CategoryTodos/Category'
import Todo from './Todos/Todo'
import './styles/todos.css'

export default function Todos() {
  return (
    <main className='Todo'>
      <header className='Todo__Header'>
        <h1>
          <strong>
            {' '}
            Day<small>🧡😵</small>
          </strong>
        </h1>
        <i className='Todo__Header-Img' />
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
