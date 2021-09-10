import React from 'react'

function TodoListCompleted() {
  const todos = []
  return (
    <div>
      <header>
        <h2>Tasks Completed</h2>
      </header>
      <div className='Todos__List'>
        {todos.length === 0 && <div>List empty</div>}
        {todos.map((todo, index) => (
          <div key={index} className='Todos__Item'>
            {todo.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoListCompleted
