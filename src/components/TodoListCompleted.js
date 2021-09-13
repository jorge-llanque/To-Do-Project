import React from 'react'
import useTodos from '../hooks/useTodos'

function TodoListCompleted() {
  const { getListTodosCompleted } = useTodos()

  return (
    <div>
      <header>
        <h2>Tasks Completed</h2>
      </header>
      <div className='Todos__List'>
        {getListTodosCompleted.length === 0 && <div>List empty</div>}
        {getListTodosCompleted.map(todo => (
          <div key={todo.id} className='Todos__Item'>
            {todo.task}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoListCompleted
