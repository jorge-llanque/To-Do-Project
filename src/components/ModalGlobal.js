import React from 'react'
import Modal from './Modal'
import CategoryFormEdit from './CategoryTodos/CategoryFormEdit'
import CategoryFormDelete from './CategoryTodos/CategoryFormDelete'
import CategoryForm from './CategoryTodos/CategoryForm'
import TodoForm from './Todos/TodoForm'

export default function ModalGlobal({ value, cleanValue }) {
  const { action, item } = value
  console.log(action)

  return (
    <>
      {(action === 'updateCategory' && (
        <Modal>
          <CategoryFormEdit categoryToEdit={item} />
        </Modal>
      )) ||
        (action === 'deleteCategory' && (
          <Modal>
            <CategoryFormDelete item={item} />
          </Modal>
        )) ||
        (action === 'createCategory' && (
          <Modal>
            <CategoryForm />
          </Modal>
        ))}
    </>
  )
}
