import React, { useState } from 'react'
import CategoriesInitialState from '../utils/CategoriesInitialState'

const Context = React.createContext({})

export function CategoriesContextProvider(props) {
  const [categories, setCategories] = useState(CategoriesInitialState)

  return (
    <Context.Provider value={{ categories, setCategories }}>
      {props.children}
    </Context.Provider>
  )
}

export default Context
