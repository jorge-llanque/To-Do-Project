import React, { useState } from 'react'
import ListCategories from './ListCategories'
import { BiPlus } from 'react-icons/bi'
import Modal from '../Modal'
import useTodos from '../../hooks/useTodos'
import '../styles/categories.css'
import CategoryForm from './CategoryForm'

export default function Category() {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }
  return (
    <div>
      <header className='Title'>
        <h2>Categories</h2>
        <button className='Icon' onClick={handleShowModal}>
          <BiPlus />
        </button>
        {showModal && (
          <Modal onClose={handleCloseModal}>
            <CategoryForm onClose={handleCloseModal} />
          </Modal>
        )}
      </header>
      <ListCategories />
    </div>
  )
}
