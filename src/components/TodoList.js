import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'

export default function TodoList({
  todos,
  removeTodo,
  updateTodo,
  taskCompleted,
}) {
  const [edit, setEdit] = useState(null)
  useEffect(() => {
    console.log(todos)
  })

  if (todos.length === 0) return <div>List empty</div>

  const updateTask = task => {
    let newTask = {
      id: edit.id,
      text: task.text,
      isCompleted: false,
    }
    updateTodo(newTask)
    setEdit(null)
  }

  const handleIsComplete = idTask => {
    taskCompleted(idTask)
  }

  return (
    <>
      {edit ? (
        <TodoForm editTask={edit} onSubmit={updateTask} />
      ) : (
        <section className='Todos'>
          <div className='Todos__List'>
            {todos.map(todo => (
              <div key={todo.id} className='Todos__Item'>
                <p>{todo.text}</p>
                <span>{todo.id}</span>
                <div className='Options'>
                  <button
                    onClick={() => setEdit({ id: todo.id, text: todo.text })}
                  >
                    Update
                  </button>
                  <button onClick={() => removeTodo(todo.id)}>Remove</button>
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
