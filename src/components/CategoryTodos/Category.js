import React, { useState } from 'react'
import ListCategories from './ListCategories'
import { AddIcon } from '../../utils/Icons'
import CategoryForm from './CategoryForm'
import '../styles/categories.css'
import Modal from '../Modal'

export default function Category() {
  const [value, setValue] = useState(false)

  const handleCreateCategory = () => {
    setValue(true)
  }
  const onClose = () => {
    setValue(false)
  }
  return (
    <div>
      <header className='Title'>
        <h2>Categories</h2>
        <button className='Icon' onClick={handleCreateCategory}>
          <AddIcon />
        </button>
        {value && (
          <Modal onClose={onClose}>
            <CategoryForm onClose={onClose} />
          </Modal>
        )}
      </header>
      <ListCategories />
    </div>
  )
}
