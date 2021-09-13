import React from 'react'
import ReactDOM from 'react-dom'
import useModal from '../hooks/useModal'
import { CloseIcon } from '../utils/Icons'
import './styles/modal.css'

function Modal({ children }) {
  const { setShowModal } = useModal()

  return (
    <div className='Modal'>
      <div className='Modal__Content'>
        <button
          onClick={() => setShowModal(false)}
          className='CloseModalIcon Icon'
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  )
}

export default function ModalPortal({ children }) {
  return ReactDOM.createPortal(
    <Modal>{children}</Modal>,
    document.getElementById('main-contain')
  )
}
