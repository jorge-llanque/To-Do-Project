import React, { useState } from 'react'
import useCategories from '../../hooks/useCategories'
import { ImPencil2 } from 'react-icons/im'
import { RiDeleteBin4Line } from 'react-icons/ri'
import Modal from '../Modal'
import CategoryFormEdit from './CategoryFormEdit'

function ListCategories() {
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalRemove, setShowModalRemove] = useState(false)
  const [toEdit, setToEdit] = useState({})
  const [toRemove, setToRemove] = useState({})
  const { listCategories, removeCategory } = useCategories()

  const getFirstCharacter = word => word.charAt(0)

  const handleUpdateCategory = obj => {
    setToEdit(obj)
    setShowModalEdit(true)
  }
  const handleDeleteCategory = obj => {
    setToRemove(obj)
    setShowModalRemove(true)
  }
  const handleCloseModal = () => {
    setShowModalEdit(false)
  }
  const handleSubmit = id => {
    removeCategory(id)
    setShowModalRemove(false)
  }

  if (listCategories.length === 0) return <div>List empty</div>
  return (
    <div className='Categories__List'>
      {listCategories.map(category => (
        <div className='Categories__Item' key={category.id}>
          <div>
            <span className='Categories__Item-Char'>
              {getFirstCharacter(category.text)}
            </span>
            <span className='Categories__Item-Word'>{category.text}</span>
          </div>
          <div className='Categories__Item-Options'>
            <button onClick={() => handleUpdateCategory(category)}>
              <ImPencil2 />
            </button>
            {showModalEdit && (
              <Modal onClose={handleCloseModal}>
                <CategoryFormEdit
                  categoryToEdit={toEdit}
                  onClose={handleCloseModal}
                />
              </Modal>
            )}
            <button onClick={() => handleDeleteCategory(category)}>
              <RiDeleteBin4Line />
              {showModalRemove && (
                <Modal onClose={handleCloseModal}>
                  <form onSubmit={() => handleSubmit(toRemove.id)}>
                    <h4>
                      Do you want to delete definility {toRemove.text} category
                      ?
                    </h4>
                    <button type='button' onClick={handleCloseModal}>
                      Cancel
                    </button>
                    <button type='submit'>I'm sure</button>
                  </form>
                </Modal>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListCategories
