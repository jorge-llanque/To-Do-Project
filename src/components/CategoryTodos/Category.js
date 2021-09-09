import React, { useState } from 'react'
import ListCategories from './ListCategories'
import { BiPlus } from 'react-icons/bi'
import '../styles/categories.css'
import Modal from '../Modal'

export default function Category({ categories, addCategory }) {
  const [input, setInput] = useState('')
  const [showModal, setShowModal] = useState(false)

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
  const handleCreateCategory = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <div>
      <title className='Categories__Title'>
        <h2>Categories</h2>
        <button
          className='Categories__AddIcon Icon'
          onClick={handleCreateCategory}
        >
          <BiPlus />
        </button>
        {showModal && (
          <Modal onClose={handleClose}>
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
      </title>
      <ListCategories categories={categories} />
    </div>
  )
}
