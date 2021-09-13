import React from 'react'
import useTodos from '../../hooks/useTodos'

export default function CategoryFormDelete({ item, onClose }) {
  const { removeTodo } = useTodos()

  const handleSubmit = e => {
    e.preventDefault()
    removeTodo(item.id)
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
