import React from 'react'

export default function TodoForm({ handleInput, handleSubmit }) {
  return (
    <form className='Form' onSubmit={handleSubmit}>
      <input type='text' placeholder='Write anything' onChange={handleInput} />
      <button>Add</button>
    </form>
  )
}
