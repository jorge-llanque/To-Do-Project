import React, { useState } from 'react'

const Context = React.createContext({})

export function ModalContextProvider(props) {
  const [showModal, setShowModal] = useState(false)
  return (
    <Context.Provider value={{ showModal, setShowModal }}>
      {props.children}
    </Context.Provider>
  )
}

export default Context
