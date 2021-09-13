import React from 'react'
import useTodos from '../../hooks/useTodos'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import * as Yup from 'yup'
import '../styles/todos.css'
import useCategories from '../../hooks/useCategories'
import useModal from '../../hooks/useModal'

export default function TodoForm() {
  const { addTodo } = useTodos()
  const { listCategories } = useCategories()
  const { setShowModal } = useModal()

  return (
    <Formik
      initialValues={{
        task: '',
        category: '',
      }}
      validationSchema={Yup.object({
        task: Yup.string()
          .min(10, 'Too short')
          .max(100, 'Must be 100 characters or less')
          .required('Required'),
        category: Yup.string()
          .oneOf(
            listCategories.map(obj => obj.text),
            'Invalid category type'
          )
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values)
          addTodo(values)
          setSubmitting(false)
          setShowModal(false)
        }, 400)
      }}
    >
      <Form className='TodoForm__Form'>
        <Field
          type='text'
          name='task'
          placeholder='Write anything'
          className='TodoForm__Task'
        />
        <ErrorMessage name='task' />
        <div>
          <label className='TodoForm__Label'>Select Category:</label>
          <Field name='category' as='select' className='TodoForm__Category'>
            {listCategories.map(category => (
              <option key={category.id} value={category.text}>
                {category.text}
              </option>
            ))}
          </Field>
          <ErrorMessage name='category' />
        </div>
        <button type='submit' className='TodoForm__SubmitButton'>
          Add
        </button>
      </Form>
    </Formik>
  )
}
