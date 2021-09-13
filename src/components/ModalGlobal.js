import React from 'react'
import Modal from './Modal'
import CategoryFormEdit from './CategoryTodos/CategoryFormEdit'
import CategoryFormDelete from './CategoryTodos/CategoryFormDelete'
import CategoryForm from './CategoryTodos/CategoryForm'
import TodoForm from './Todos/TodoForm'

export default function ModalGlobal({ value }) {
  const { action, item } = value
  console.log(action)

  return (
    <Modal>
      {(
        action === 'updateCategory' && (
          <CategoryFormEdit categoryToEdit={item} />
        )
      )(
        action === 'updateCategory' && (
          <CategoryFormEdit categoryToEdit={item} />
        )
      ) ||
        (action === 'deleteCategory' && <CategoryFormDelete item={item} />) ||
        (action === 'createCategory' && <CategoryForm />) ||
        (action === 'createTodo' && <TodoForm />)}
    </Modal>
  )
}
