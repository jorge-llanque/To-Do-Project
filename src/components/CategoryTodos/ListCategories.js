import React from 'react'

function ListCategories({ categories }) {
  return (
    <div className='Categories__List'>
      {categories.map((category, index) => (
        <span key={index} className='Categories__Item'>
          {category}
        </span>
      ))}
    </div>
  )
}

export default ListCategories
