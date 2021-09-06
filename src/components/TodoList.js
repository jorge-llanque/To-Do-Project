import React from 'react'

export default function TodoList({ todos, removeTodo, updateTodo }) {
  if (todos.length === 0) return <div>List empty</div>

  return (
    <section className='Todos'>
      <div className='Todos__List'>
        {todos.map(todo => (
          <div key={todo.id} className='Todos__Item'>
            <p>{todo.text}</p>
            <div className='Options'>
              <button onClick={() => updateTodo(todo.id)}>Update</button>
              <button onClick={() => removeTodo(todo.id)}>Remove</button>
              <div>
                <input type='checkbox' id='complete' name='complete' />
                <label for='complete'>Complete?</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
