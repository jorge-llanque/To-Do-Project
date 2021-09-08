import React, { useState } from 'react'

export default function TodoForm({ onSubmit, editTask }) {
  const [input, setInput] = useState(editTask ? editTask.text : '')

  const handleInput = e => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    let task = {
      id: Math.random(),
      text: input,
      isCompleted: false,
    }
    onSubmit(task)
    setInput('')
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
          <button>Add</button>
        </>
      )}
    </form>
  )
}
