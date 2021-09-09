import React from 'react'

function ListCategories({ categories }) {
  return (
    <>
      {categories.map((category, index) => (
        <div key={index}>{category}</div>
      ))}
    </>
  )
}

export default ListCategories
