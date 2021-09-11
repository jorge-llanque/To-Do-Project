import React, { useState } from 'react'
import useTodos from '../../hooks/useTodos'
import { ImPencil2 } from 'react-icons/im'
import { RiDeleteBin4Line } from 'react-icons/ri'
import Modal from '../Modal'
import CategoryFormEdit from './CategoryFormEdit'

function ListCategories() {
  const [showModalEdit, setShowModalEdit] = useState(false)
  const { listCategory } = useTodos()

  const getFirstCharacter = word => word.charAt(0)

  const handleUpdateCategory = () => {
    setShowModalEdit(true)
  }
  const handleCloseModal = () => {
    setShowModalEdit(false)
  }

  if (listCategory.length === 0) return <div>List empty</div>
  return (
    <div className='Categories__List'>
      {listCategory.map(category => (
        <div className='Categories__Item' key={category.id}>
          <div>
            <span className='Categories__Item-Char'>
              {getFirstCharacter(category.text)}
            </span>
            <span className='Categories__Item-Word'>{category.text}</span>
          </div>
          <div className='Categories__Item-Options'>
            <button onClick={handleUpdateCategory}>
              <ImPencil2 />
            </button>
            {showModalEdit && (
              <Modal onClose={handleCloseModal}>
                <CategoryFormEdit categoryToEdit={category} />
              </Modal>
            )}
            <button>
              <RiDeleteBin4Line />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListCategories
