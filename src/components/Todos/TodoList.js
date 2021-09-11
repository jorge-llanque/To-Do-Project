import React, { useState } from 'react'
import useTodos from '../../hooks/useTodos'
import TodoForm from './TodoForm'
import { BsSquare } from 'react-icons/bs'
import { ImPencil2 } from 'react-icons/im'
import { RiDeleteBin4Line } from 'react-icons/ri'
import '../styles/todos.css'

export default function TodoList() {
  const { getListTodo, removeTask } = useTodos()
  const [edit, setEdit] = useState(null)

  if (getListTodo.length === 0)
    return <div className='Todo__List'>List empty</div>

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
            {getListTodo.map(todo => (
              <div key={todo.id} className='Todos__Item-cover'>
                <div className='Todos__Item'>
                  <div className='Todos__Item-Contain'>
                    <div className='Options-Actions'>
                      <button
                        onClick={() =>
                          setEdit({ id: todo.id, text: todo.text })
                        }
                      >
                        <ImPencil2 />
                      </button>
                      <button onClick={() => handleDeleteTask(todo.id)}>
                        <RiDeleteBin4Line />
                      </button>
                    </div>
                    <p className='Todos__Item-Task'>{todo.task}</p>
                    <span className='Todos__Item-Category'>
                      {todo.category}
                    </span>
                  </div>
                  <button
                    onClick={() => handleIsComplete(todo.id)}
                    className='Options-SelectInput'
                  >
                    <BsSquare />
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
