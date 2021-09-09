import React, { useState } from 'react'

export default function TodoForm({ onSubmit, editTask, categories }) {
  const [input, setInput] = useState(editTask ? editTask.text : '')
  const [category, setCategory] = useState('todo')

  const handleInput = e => {
    e.preventDefault()
    setInput(e.target.value)
  }
  const handleChangeCategory = e => {
    setCategory(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    let task = {
      id: Math.random(),
      text: input,
      category: category,
    }
    onSubmit(task)
    setInput('')
    setCategory('todo')
  }

  return (
    <form className='Form' onSubmit={handleSubmit}>
      {editTask ? (
        <>
          <input type='text' value={input} onChange={handleInput} />
          <button>Update</button>
        </>
      ) : (
        <>
          <input
            type='text'
            placeholder='Write anything'
            value={input}
            onChange={handleInput}
          />
          <div>
            <label htmlFor='categoryTodo'>Select Category:</label>
            <select id='categoryTodo' onChange={handleChangeCategory}>
              {categories.map(category => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
          <button>Add</button>
        </>
      )}
    </form>
  )
}
