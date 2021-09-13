import React from 'react'
import useCategories from '../../hooks/useCategories'
import useModal from '../../hooks/useModal'

export default function CategoryFormDelete({ item }) {
  const { removeCategory } = useCategories()
  const { setShowModal } = useModal()

  const handleSubmit = e => {
    e.preventDefault()
    removeCategory(item.id)
    setShowModal(false)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Do you want to remove it?</h4>
      <button type='button' onClick={handleCloseModal}>
        Cancel
      </button>
      <button type='submit'>Remove</button>
    </form>
  )
}
