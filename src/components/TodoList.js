import React, { useState } from 'react'
import useTodo from '../hooks/useTodo'
import TodoForm from './TodoForm'

export default function TodoList() {
  const { todoList } = useTodo()
  const [edit, setEdit] = useState(null)

  if (todoList.length === 0) return <div>List empty</div>

  const updateTask = task => {
    let newTask = {
      id: edit.id,
      text: task.text,
      category: 'todo',
    }

    setEdit(null)
  }

  const handleIsComplete = idTask => {}

  return (
    <>
      {edit ? (
        <TodoForm editTask={edit} onSubmit={updateTask} />
      ) : (
        <section className='Todos'>
          <div className='Todos__List'>
            {todoList.map(todo => (
              <div key={todo.id} className='Todos__Item'>
                <p>{todo.text}</p>
                <span>{todo.id}</span>
                <span>{todo.category}</span>
                <div className='Options'>
                  <button
                    onClick={() => setEdit({ id: todo.id, text: todo.text })}
                  >
                    Update
                  </button>
                  <button>Remove</button>
                  <button onClick={() => handleIsComplete(todo.id)}>
                    Is Completed?
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
