import React from 'react'
import useTodos from '../hooks/useTodos'
import { CheckIcon, RedoIcon } from '../utils/Icons'

function TodoListCompleted() {
  const { listTodosCompleted, removeTodoCompleted } = useTodos()

  const handleRemoveTodoCompleted = todo => {
    removeTodoCompleted(todo)
  }

  return (
    <div>
      <header>
        <h2>Tasks Completed</h2>
      </header>
      <div className='Todos__List'>
        {listTodosCompleted.length === 0 && <div>List empty</div>}
        {listTodosCompleted.map(todo => (
          <div key={todo.id} className='Todos__Item-Completed'>
            <CheckIcon />
            {todo.task}
            <button onClick={() => handleRemoveTodoCompleted(todo)}>
              <RedoIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoListCompleted
