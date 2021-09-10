import React, { useState } from 'react'
import useTodos from '../hooks/useTodos'
import TodoForm from './TodoForm'
import './styles/todos.css'

export default function TodoList() {
  const { todoList, removeTask } = useTodos()
  const [edit, setEdit] = useState(null)

  if (todoList.length === 0) return <div className='Todo__List'>List empty</div>

  const updateTask = task => {
    let newTask = {
      id: edit.id,
      text: task.text,
      category: 'todo',
    }

    setEdit(null)
  }

  const handleDeleteTask = idTask => {
    console.log(idTask)
    removeTask(idTask)
  }
  const handleIsComplete = idTask => {}

  return (
    <div className='Todo__List-Container'>
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
                  <button onClick={() => handleDeleteTask(todo.id)}>
                    Remove
                  </button>
                  <button onClick={() => handleIsComplete(todo.id)}>
                    Is Completed?
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
