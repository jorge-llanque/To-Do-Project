import React from 'react'
import { BiPlus } from 'react-icons/bi'
import TodoList from '../TodoList'

export default function Todo() {
  return (
    <div>
      <header className='Todo__Title Title'>
        <h2>To Do</h2>
        <button className='Todo__AddIcon Icon'>
          <BiPlus />
        </button>
      </header>
      <TodoList />
    </div>
  )
}
