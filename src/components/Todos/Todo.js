import React, { useState } from 'react'
import { AddIcon } from '../../utils/Icons'
import TodoList from './TodoList'
import Modal from '../Modal'
import TodoForm from './TodoForm'

export default function Todo() {
  const [value, setValue] = useState(false)

  const handleCreateTodo = () => {
    setValue({
      action: 'createTodo',
    })
  }
  const onClose = () => {
    setValue(false)
  }

  return (
    <div>
      <header className='Todo__Title Title'>
        <h2>To Do</h2>
        <button onClick={handleCreateTodo} className='Todo__AddIcon Icon'>
          <AddIcon />
        </button>
        {value && (
          <Modal onClose={onClose}>
            <TodoForm onClose={onClose} />
          </Modal>
        )}
      </header>
      <TodoList />
    </div>
  )
}
