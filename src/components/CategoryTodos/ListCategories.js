import React from 'react'

function ListCategories({ categories }) {
  return (
    <>
      <h3>Categories Todo</h3>
      {categories.map((category, index) => (
        <div key={index}>{category}</div>
      ))}
    </>
  )
}

export default ListCategories
