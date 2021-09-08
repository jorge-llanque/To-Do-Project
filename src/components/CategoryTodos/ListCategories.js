import React from 'react'

function ListCategories({ todoCategories }) {
  return (
    <>
      <h2>Categories Todo</h2>
      {todoCategories.map((category, index) => (
        <div key={index}>{category}</div>
      ))}
    </>
  )
}

export default ListCategories
