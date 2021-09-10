import React from 'react'
import useTodos from '../../hooks/useTodos'

function ListCategories() {
  const { todoCategory } = useTodos()
  if (todoCategory.length === 0) return <div>List empty</div>

  return (
    <div className='Categories__List'>
      {todoCategory.map((category, index) => (
        <span key={index} className='Categories__Item'>
          {category}
        </span>
      ))}
    </div>
  )
}

export default ListCategories
