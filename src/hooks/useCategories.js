/* eslint-disable no-undef */
import { useContext, useEffect } from 'react'
import CategoriesContext from '../context/CategoriesContext'
import {
  addId,
  saveInLocalStorage,
  getFromLocalStorage,
  updateItemFromList,
  removeItemFromList,
} from '../utils/Methods'

export default function useCategories() {
  const { categories, setCategories } = useContext(CategoriesContext)

  useEffect(() => {
    console.log('useCategories Render')
  })

  const listCategories = getFromLocalStorage('categories') || categories

  const addCategory = item => {
    const newCategory = addId(item)
    setCategories([newCategory, ...categories])
    saveInLocalStorage('categories', categories, false, newCategory)
  }
  const updateCategory = (item, id) => {
    const newList = updateItemFromList({ id, ...item }, categories)
    setCategories(newList)
    saveInLocalStorage('categories', newList, true)
  }
  const removeCategory = id => {
    const newList = removeItemFromList(id, categories)
    setCategories(newList)
    saveInLocalStorage('categories', newList, true)
  }

  return {
    addCategory,
    listCategories,
    updateCategory,
    removeCategory,
  }
}
