import React from 'react'
import useCategories from '../../hooks/useCategories'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import useModal from '../../hooks/useModal'

export default function CategoryForm() {
  const { setShowModal } = useModal()
  const { addCategory } = useCategories()

  return (
    <Formik
      initialValues={{ text: '' }}
      validationSchema={Yup.object({
        text: Yup.string()
          .max(12, 'Must be 12 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          addCategory(values)
          setSubmitting(false)
          setShowModal(false)
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
          Add
        </button>
      </Form>
    </Formik>
  )
}
