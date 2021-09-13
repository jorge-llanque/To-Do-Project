import React from 'react'

export default function CategoryFormDelete({ onClose, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <h4>Do you want to remove it?</h4>
      <button type='button' onClick={onClose}>
        Cancel
      </button>
      <button type='submit'>Remove</button>
    </form>
  )
}
