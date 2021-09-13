import React, { useState } from 'react'
import useTodos from '../../hooks/useTodos'
import Modal from '../Modal'
import TodoFormDelete from './TodoFormDelete'
import TodoFormEdit from './TodoFormEdit'
import '../styles/todos.css'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { listTodos, addTodoCompleted } = useTodos()
  const [value, setValue] = useState(false)

  const handleUpdateTask = obj => {
    setValue({
      action: 'updateTask',
      item: obj,
    })
  }
  const onClose = () => {
    setValue(false)
  }
  const handleDeleteTask = obj => {
    setValue({
      action: 'deleteTask',
      item: obj,
    })
  }
  const handleIsComplete = task => {
    addTodoCompleted(task)
  }

  if (listTodos.length === 0)
    return <div className='Todo__List'>List empty</div>
  return (
    <div className='Todo__List-Container'>
      <section className='Todos'>
        <div className='Todos__List'>
          {listTodos.map(todo => (
            <TodoItem
              key={todo.id}
              className='Todos__Item-cover'
              todo={todo}
              updateTask={handleUpdateTask}
              deleteTask={handleDeleteTask}
              isComplete={handleIsComplete}
            />
          ))}
        </div>
        {value && (
          <Modal onClose={onClose}>
            {(value.action === 'updateTask' && (
              <TodoFormEdit onClose={onClose} toEdit={value.item} />
            )) ||
              (value.action === 'deleteTask' && (
                <TodoFormDelete onClose={onClose} item={value.item} />
              ))}
          </Modal>
        )}
      </section>
    </div>
  )
}
