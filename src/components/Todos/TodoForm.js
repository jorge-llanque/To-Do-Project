import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useTodos from '../../hooks/useTodos'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import * as Yup from 'yup'
import '../styles/todos.css'

export default function TodoForm({ editTask, onClose }) {
  const { newTask, todoCategory } = useTodos()

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
          .oneOf(todoCategory, 'Invalid category type')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values)
          newTask(values)
          setSubmitting(false)
          onClose()
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
            {todoCategory.map(category => (
              <option key={category} value={category}>
                {category}
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
