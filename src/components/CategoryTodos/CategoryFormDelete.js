import React from 'react'
import useCategories from '../../hooks/useCategories'

export default function CategoryFormDelete({ item, onClose }) {
  const { removeCategory } = useCategories()

  const handleSubmit = e => {
    e.preventDefault()
    removeCategory(item.id)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Do you want to remove it?</h4>
      <button type='button' onClick={() => onClose()}>
        Cancel
      </button>
      <button type='submit'>Remove</button>
    </form>
  )
}
