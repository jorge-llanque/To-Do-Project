import React from 'react'

function TodoListCompleted({ todos }) {
  return (
    <>
      <h2>Tasks Completed</h2>
      <div className='Todos__List'>
        {todos.map((todo, index) => (
          <div key={index} className='Todos__Item'>
            {todo.text}
          </div>
        ))}
      </div>
    </>
  )
}

export default TodoListCompleted
