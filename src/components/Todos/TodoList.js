import React, { useState } from 'react'
import useTodos from '../../hooks/useTodos'
import Modal from '../Modal'
import { CheckIcon, UpdateIcon, DeleteIcon } from '../../utils/Icons'
import TodoFormEdit from './TodoFormEdit'
import '../styles/todos.css'

export default function TodoList() {
  const { listTodos, removeTodo, addTodoCompleted } = useTodos()
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalRemove, setShowModalRemove] = useState(false)
  const [edit, setEdit] = useState(null)
  const [toRemove, setToRemove] = useState(null)

  if (listTodos.length === 0)
    return <div className='Todo__List'>List empty</div>

  const handleUpdateTask = task => {
    setEdit(task)
    setShowModalEdit(true)
  }
  const handleCloseModal = () => {
    setShowModalEdit(false)
  }
  const handleDeleteTask = task => {
    setToRemove(task)
    setShowModalRemove(true)
  }
  const handleSubmit = id => {
    removeTodo(id)
    setShowModalRemove(false)
  }
  const handleIsComplete = task => {
    addTodoCompleted(task)
  }

  return (
    <div className='Todo__List-Container'>
      <section className='Todos'>
        <div className='Todos__List'>
          {listTodos.map(todo => (
            <div key={todo.id} className='Todos__Item-cover'>
              <div className='Todos__Item'>
                <div className='Todos__Item-Contain'>
                  <div className='Options-Actions'>
                    <button onClick={() => handleUpdateTask(todo)}>
                      <UpdateIcon />
                    </button>
                    {showModalEdit && (
                      <Modal onClose={handleCloseModal}>
                        <TodoFormEdit
                          toEdit={edit}
                          onClose={handleCloseModal}
                        />
                      </Modal>
                    )}
                    <button onClick={() => handleDeleteTask(todo)}>
                      <DeleteIcon />
                    </button>
                    {showModalRemove && (
                      <Modal onClose={handleCloseModal}>
                        <form onSubmit={() => handleSubmit(toRemove.id)}>
                          <h4>
                            Do you want to delete definility {toRemove.task}?
                          </h4>
                          <button type='button' onClick={handleCloseModal}>
                            Cancel
                          </button>
                          <button type='submit'>I'm sure</button>
                        </form>
                      </Modal>
                    )}
                  </div>
                  <p className='Todos__Item-Task'>{todo.task}</p>
                  <span className='Todos__Item-Category'>{todo.category}</span>
                </div>
                <button
                  onClick={() => handleIsComplete(todo)}
                  className='Options-SelectInput'
                >
                  <CheckIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
