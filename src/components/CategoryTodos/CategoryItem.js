import React from 'react'
import getFirstChar from '../../utils/getFirstChar'
import { DeleteIcon, UpdateIcon } from '../../utils/Icons'

export default function CategoryItem({ category, updateCat, deleteCat }) {
  return (
    <>
      <div>
        <span className='Categories__Item-Char'>
          {getFirstChar(category.text)}
        </span>
        <span className='Categories__Item-Word'>{category.text}</span>
      </div>
      <div className='Categories__Item-Options'>
        <button onClick={() => updateCat(category)}>
          <UpdateIcon />
        </button>
        <button onClick={() => deleteCat(category)}>
          <DeleteIcon />
        </button>
      </div>
    </>
  )
}
