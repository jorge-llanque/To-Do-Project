import React, { useState } from 'react'
import useModal from '../../hooks/useModal'
import { AddIcon } from '../../utils/Icons'
import TodoList from './TodoList'
import ModalGlobal from '../ModalGlobal'

export default function Todo() {
  const { showModal, setShowModal } = useModal()
  const [value, setValue] = useState({})

  const handleCreateTodo = () => {
    setShowModal(true)
    setValue({
      action: 'createTodo',
    })
  }

  return (
    <div>
      <header className='Todo__Title Title'>
        <h2>To Do</h2>
        <button onClick={handleCreateTodo} className='Todo__AddIcon Icon'>
          <AddIcon />
        </button>
        {showModal && <ModalGlobal value={{ action: 'createTodo' }} />}
      </header>
      <TodoList />
    </div>
  )
}
