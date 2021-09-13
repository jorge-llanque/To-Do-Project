import React, { useState } from 'react'
import useCategories from '../../hooks/useCategories'
import useModal from '../../hooks/useModal'
import ModalGlobal from '../ModalGlobal'
import CategoryItem from './CategoryItem'

function ListCategories() {
  const { showModal, setShowModal } = useModal()
  const [value, setValue] = useState({})
  const { listCategories } = useCategories()

  const handleUpdateCategory = obj => {
    setShowModal(true)
    setValue({
      action: 'updateCategory',
      item: obj,
    })
  }
  const handleDeleteCategory = obj => {
    setShowModal(true)
    setValue({
      action: 'deleteCategory',
      item: obj,
    })
  }

  if (listCategories.length === 0) return <div>List Empty</div>
  return (
    <div className='Categories__List'>
      {listCategories.map(category => (
        <CategoryItem
          key={category.id}
          category={category}
          updateCat={handleUpdateCategory}
          deleteCat={handleDeleteCategory}
        />
      ))}
      {showModal && <ModalGlobal value={value} />}
    </div>
  )
}

export default ListCategories
