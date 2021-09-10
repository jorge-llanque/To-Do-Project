import React, { useState } from 'react'
import TodoListCompleted from './TodoListCompleted'
import Category from './CategoryTodos/Category'
import './styles/todos.css'
import Todo from './Todos/Todo'
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

  /* <TodoForm categories={todoCategory} />
          <TodoList /> */

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
          <Todo />
        </section>
        <section className='Todo__Container-Completed'>
          <TodoListCompleted todos={todoCompleted} />
        </section>
      </div>
    </main>
  )
}
