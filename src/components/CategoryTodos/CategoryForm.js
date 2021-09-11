import React from 'react'
import useTodos from '../../hooks/useTodos'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

export default function CategoryForm({ onClose }) {
  const { addCategory } = useTodos()

  return (
    <Formik
      initialValues={{ category: '' }}
      validationSchema={Yup.object({
        category: Yup.string()
          .max(12, 'Must be 12 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          addCategory(values)
          setSubmitting(false)
          onClose()
        }, 400)
      }}
    >
      <Form className='CategoryForm__Form'>
        <Field
          type='text'
          name='category'
          placeholder='Add category'
          className='CategoryForm__Input'
        />
        <ErrorMessage name='category' />
        <button type='submit' className='CategoryForm__SubmitButton'>
          Add
        </button>
      </Form>
    </Formik>
  )
}
