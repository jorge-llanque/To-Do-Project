import React from 'react'
import useCategories from '../../hooks/useCategories'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

export default function CategoryFormEdit({ categoryToEdit, onClose }) {
  const { updateCategory } = useCategories()

  return (
    <Formik
      initialValues={{ text: categoryToEdit.text }}
      validationSchema={Yup.object({
        text: Yup.string()
          .max(12, 'Must be 12 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          updateCategory(values, categoryToEdit.id)
          setSubmitting(false)
          onClose(false)
        }, 400)
      }}
    >
      <Form className='CategoryForm__Form'>
        <Field
          type='text'
          name='text'
          placeholder='Add category'
          className='CategoryForm__Input'
        />
        <ErrorMessage name='text' />
        <button type='submit' className='CategoryForm__SubmitButton'>
          Update
        </button>
      </Form>
    </Formik>
  )
}
