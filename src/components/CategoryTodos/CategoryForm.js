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
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          addCategory(values)
          setSubmitting(false)
          onClose()
        }, 3000)
      }}
    >
      <Form>
        <Field type='text' name='category' placeholder='Add category' />
        <ErrorMessage name='category' />
        <button type='submit'>Add</button>
      </Form>
    </Formik>
  )
}
