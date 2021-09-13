import React, { useState } from 'react'
import useTodos from '../../hooks/useTodos'
import Modal from '../Modal'
import { BsSquare } from 'react-icons/bs'
import { ImPencil2 } from 'react-icons/im'
import { RiDeleteBin4Line } from 'react-icons/ri'
import TodoFormEdit from './TodoFormEdit'
import '../styles/todos.css'

export default function TodoList() {
  const { getListTodo, removeTask } = useTodos()
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [edit, setEdit] = useState(null)

  if (getListTodo.length === 0)
    return <div className='Todo__List'>List empty</div>

  const handleUpdateTask = task => {
    setEdit(task)
    setShowModalEdit(true)
  }
  const handleCloseModal = () => {
    setShowModalEdit(false)
  }

  const handleDeleteTask = idTask => {
    console.log(idTask)
    removeTask(idTask)
  }
  const handleIsComplete = idTask => {}

  return (
    <div className='Todo__List-Container'>
      <section className='Todos'>
        <div className='Todos__List'>
          {getListTodo.map(todo => (
            <div key={todo.id} className='Todos__Item-cover'>
              <div className='Todos__Item'>
                <div className='Todos__Item-Contain'>
                  <div className='Options-Actions'>
                    <button onClick={() => handleUpdateTask(todo)}>
                      <ImPencil2 />
                    </button>
                    {showModalEdit && (
                      <Modal onClose={handleCloseModal}>
                        <TodoFormEdit
                          toEdit={edit}
                          onClose={handleCloseModal}
                        />
                      </Modal>
                    )}
                    <button onClick={() => handleDeleteTask(todo.id)}>
                      <RiDeleteBin4Line />
                    </button>
                  </div>
                  <p className='Todos__Item-Task'>{todo.task}</p>
                  <span className='Todos__Item-Category'>{todo.category}</span>
                </div>
                <button
                  onClick={() => handleIsComplete(todo.id)}
                  className='Options-SelectInput'
                >
                  <BsSquare />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
