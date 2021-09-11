import React from 'react'
import useTodos from '../../hooks/useTodos'
import { ImPencil2 } from 'react-icons/im'
import { RiDeleteBin4Line } from 'react-icons/ri'

function ListCategories() {
  const { todoCategory } = useTodos()
  if (todoCategory.length === 0) return <div>List empty</div>

  const getFirstCharacter = word => word.charAt(0)
  return (
    <div className='Categories__List'>
      {todoCategory.map((category, index) => (
        <div className='Categories__Item'>
          <div>
            <span className='Categories__Item-Char'>
              {getFirstCharacter(category)}
            </span>
            <span key={index} className='Categories__Item-Word'>
              {category}
            </span>
          </div>
          <div className='Categories__Item-Options'>
            <button>
              <ImPencil2 />
            </button>
            <button>
              <RiDeleteBin4Line />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListCategories
