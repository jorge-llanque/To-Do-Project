import React, { useState } from 'react'
import ListCategories from './ListCategories'
import { BiPlus } from 'react-icons/bi'
import '../styles/categories.css'

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
      <title className='Categories__Title'>
        <h2>Categories</h2>
        <i>
          <BiPlus />
        </i>
      </title>
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
