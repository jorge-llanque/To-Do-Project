import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { CloseIcon } from '../utils/Icons'
import './styles/modal.css'

function Modal({ children, onClose }) {
  return (
    <div className='Modal'>
      <div className='Modal__Content'>
        <button onClick={() => onClose()} className='CloseModalIcon Icon'>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  )
}

export default function ModalPortal({ children, onClose }) {
  useEffect(() => {
    console.log('Modal Render')
  })
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('main-contain')
  )
}
