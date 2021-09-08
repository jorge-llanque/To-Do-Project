import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoListCompleted from './TodoListCompleted'
import ListCategories from './CategoryTodos/ListCategories'

const todoCategoryInitialize = ['Todo', 'Work', 'School']
export default function Todos() {
  const [todo, setTodo] = useState([])
  const [todoCompleted, setTodoCompleted] = useState([])
  const [todoCategory, setTodoCategory] = useState(todoCategoryInitialize)

  const addTodo = task => {
    setTodo([task, ...todo])
  }
  const updateTodo = newTask => {
    const newTodo = todo.map(obj => (newTask.id === obj.id ? newTask : obj))
    setTodo(newTodo)
  }
  const taskCompleted = id => {
    const item = todo.find(obj => obj.id === id)
    removeTodo(item.id)
    setTodoCompleted([item, ...todoCompleted])
  }
  const removeTodo = id => {
    const newTodoList = todo.filter(todoId => todoId.id !== id)
    setTodo(newTodoList)
  }

  return (
    <main>
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={todo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        taskCompleted={taskCompleted}
      />
      {todoCompleted.length > 0 && <TodoListCompleted todos={todoCompleted} />}
      <ListCategories todoCategories={todoCategory} />
    </main>
  )
}
