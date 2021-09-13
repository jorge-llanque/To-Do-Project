import React from 'react'
import { CheckIcon, UpdateIcon, DeleteIcon } from '../../utils/Icons'

export default function TodoItem({ todo, updateTask, deleteTask, isComplete }) {
  return (
    <>
      <div className='Todos__Item'>
        <div className='Todos__Item-Contain'>
          <div className='Options-Actions'>
            <button onClick={() => updateTask(todo)}>
              <UpdateIcon />
            </button>
            <button onClick={() => deleteTask(todo)}>
              <DeleteIcon />
            </button>
          </div>
          <p className='Todos__Item-Task'>{todo.task}</p>
          <span className='Todos__Item-Category'>{todo.category}</span>
        </div>
        <button
          onClick={() => isComplete(todo)}
          className='Options-SelectInput'
        >
          <CheckIcon />
        </button>
      </div>
    </>
  )
}
