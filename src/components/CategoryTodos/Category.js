import React, { useState } from 'react'
import ListCategories from './ListCategories'
import { BiPlus } from 'react-icons/bi'
import Modal from '../Modal'
import useTodos from '../../hooks/useTodos'
import '../styles/categories.css'

export default function Category() {
  const [input, setInput] = useState('')
  const [showModal, setShowModal] = useState(false)
  const { addCategory } = useTodos()

  const handleChange = e => {
    e.preventDefault()
    setInput(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    addCategory(input)
    setInput('')
    setShowModal(false)
  }
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
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Add category'
                onChange={handleChange}
                value={input}
              />
              <button>Add</button>
            </form>
          </Modal>
        )}
      </header>
      <ListCategories />
    </div>
  )
}
