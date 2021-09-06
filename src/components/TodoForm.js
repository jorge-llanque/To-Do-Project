import React, { useState } from 'react'

export default function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState('')

  const handleInput = e => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    let task = {
      id: Math.random(),
      text: input,
    }
    onSubmit(task)
    setInput('')
  }

  return (
    <form className='Form' onSubmit={handleSubmit}>
      {edit ? (
        <>
          <input type='text' value={edit.text} onChange={handleInput} />
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
