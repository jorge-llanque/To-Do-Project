import { useContext } from 'react'
import ModalContext from '../context/ModalContext'

export default function useModal() {
  const { showModal, setShowModal } = useContext(ModalContext)
  return { showModal, setShowModal }
}
