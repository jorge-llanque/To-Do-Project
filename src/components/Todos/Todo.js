import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import Modal from '../Modal'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function Todo() {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }
  return (
    <div>
      <header className='Todo__Title Title'>
        <h2>To Do</h2>
        <button onClick={handleShowModal} className='Todo__AddIcon Icon'>
          <BiPlus />
        </button>
        {showModal && (
          <Modal onClose={handleCloseModal}>
            <TodoForm onClose={handleCloseModal} />
          </Modal>
        )}
      </header>
      <TodoList />
    </div>
  )
}
