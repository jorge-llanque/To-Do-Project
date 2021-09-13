import React, { useState } from 'react'
import useCategories from '../../hooks/useCategories'
import Modal from '../Modal'
import CategoryFormDelete from './CategoryFormDelete'
import CategoryFormEdit from './CategoryFormEdit'
import CategoryItem from './CategoryItem'

function ListCategories() {
  const [showModal, setShowModal] = useState(false)
  const [toEdit, setToEdit] = useState({})
  const [toRemove, setToRemove] = useState({})
  const { listCategories, removeCategory } = useCategories()

  const handleUpdateCategory = obj => {
    setToEdit(obj)
    setShowModal(true)
  }
  const handleDeleteCategory = obj => {
    setToRemove(obj)
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }
  const handleSubmit = id => {
    removeCategory(id)
    setShowModal(false)
  }

  if (listCategories.length === 0) return <div>List empty</div>
  return (
    <div className='Categories__List'>
      {listCategories.map(category => (
        <CategoryItem
          category={category}
          updateCat={handleUpdateCategory}
          deleteCat={handleDeleteCategory}
        />
      ))}
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <CategoryFormEdit
            categoryToEdit={toEdit}
            onClose={handleCloseModal}
          />
        </Modal>
      )}

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <CategoryFormDelete
            onSubmit={() => handleSubmit(toRemove.id)}
            onClose={handleCloseModal}
          />
        </Modal>
      )}
    </div>
  )
}

export default ListCategories
