import React, { useState } from 'react'
import useCategories from '../../hooks/useCategories'
import Modal from '../Modal'
import CategoryItem from './CategoryItem'
import CategoryFormEdit from './CategoryFormEdit'
import CategoryFormDelete from './CategoryFormDelete'

function ListCategories() {
  const [value, setValue] = useState(false)
  const { listCategories } = useCategories()

  const handleUpdateCategory = obj => {
    setValue({
      action: 'updateCategory',
      item: obj,
    })
  }
  const handleDeleteCategory = obj => {
    setValue({
      action: 'deleteCategory',
      item: obj,
    })
  }
  const onClose = () => {
    setValue(false)
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
      {value && (
        <Modal onClose={onClose}>
          {(value.action === 'updateCategory' && (
            <CategoryFormEdit categoryToEdit={value.item} onClose={onClose} />
          )) ||
            (value.action === 'deleteCategory' && (
              <CategoryFormDelete item={value.item} onClose={onClose} />
            ))}
        </Modal>
      )}
    </div>
  )
}

export default ListCategories
