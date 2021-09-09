import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useTodo from '../hooks/useTodo'

export default function TodoForm({ editTask, categories }) {
  const [input, setInput] = useState(editTask ? editTask.text : '')
  const [category, setCategory] = useState('todo')
  const { addTask } = useTodo()

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
      id: uuidv4(),
      text: input,
      category: category,
    }
    addTask(task)
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
