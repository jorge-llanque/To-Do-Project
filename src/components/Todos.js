import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoListCompleted from './TodoListCompleted'
import Category from './CategoryTodos/Category'
import './styles/todos.css'
const todoCategoryInitialize = ['Todo', 'Work', 'School']
export default function Todos() {
  const [todo, setTodo] = useState([])
  const [todoCompleted, setTodoCompleted] = useState([])
  const [todoCategory, setTodoCategory] = useState(todoCategoryInitialize)

  // const addTodo = task => {
  //   setTodo([task, ...todo])
  // }
  // const updateTodo = newTask => {
  //   const newTodo = todo.map(obj => (newTask.id === obj.id ? newTask : obj))
  //   setTodo(newTodo)
  // }
  // const taskCompleted = id => {
  //   const item = todo.find(obj => obj.id === id)
  //   removeTodo(item.id)
  //   setTodoCompleted([item, ...todoCompleted])
  // }
  // const removeTodo = id => {
  //   const newTodoList = todo.filter(todoId => todoId.id !== id)
  //   setTodo(newTodoList)
  // }

  const addCategory = category => {
    setTodoCategory([category, ...todoCategory])
  }

  return (
    <main className='Todo'>
      <header className='Todo__Header'>
        <h1>Title</h1>
        <img src='#' alt='#' />
      </header>
      <div className='Todo__Container'>
        <section className='Todo__Container-Categories'>
          <Category categories={todoCategory} addCategory={addCategory} />
        </section>
        <section className='Todo__Container-Main'>
          <h2>To Do</h2>
          <TodoForm categories={todoCategory} />
          <TodoList />
        </section>
        <section className='Todo__Container-Completed'>
          <h2>Completed</h2>
          {todoCompleted.length > 0 && (
            <TodoListCompleted todos={todoCompleted} />
          )}
        </section>
      </div>
    </main>
  )
}
