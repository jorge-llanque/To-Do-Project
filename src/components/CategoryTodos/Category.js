import React, { useState } from 'react'
import ListCategories from './ListCategories'

export default function Category({ categories, addCategory }) {
  const [input, setInput] = useState('')

  const handleChange = e => {
    e.preventDefault()
    setInput(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    addCategory(input)
    setInput('')
  }
  return (
    <div>
      <h2>CATEGORIES</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add category'
          onChange={handleChange}
          value={input}
        />
        <button>Add</button>
      </form>
      <ListCategories categories={categories} />
    </div>
  )
}
