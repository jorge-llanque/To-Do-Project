import React, { useState } from 'react'
import ListCategories from './ListCategories'
import { AddIcon } from '../../utils/Icons'
import ModalGlobal from '../ModalGlobal'
import '../styles/categories.css'
import useModal from '../../hooks/useModal'

export default function Category() {
  const { showModal, setShowModal } = useModal()
  const [value, setValue] = useState({})

  const handleCreateCategory = () => {
    setShowModal(true)
    setValue({
      action: 'createCategory',
    })
  }
  return (
    <div>
      <header className='Title'>
        <h2>Categories</h2>
        <button className='Icon' onClick={handleCreateCategory}>
          <AddIcon />
        </button>
        {showModal && <ModalGlobal value={{ action: 'createCategory' }} />}
      </header>
      <ListCategories />
    </div>
  )
}
