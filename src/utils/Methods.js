import { v4 as uuidv4 } from 'uuid'

export const addId = obj => {
  return {
    id: uuidv4(),
    ...obj,
  }
}
export const saveInLocalStorage = (key, arrayObjects, replace, obj) => {
  if (!replace) {
    window.localStorage.setItem(key, JSON.stringify([obj, ...arrayObjects]))
  } else {
    window.localStorage.setItem(key, JSON.stringify(arrayObjects))
  }
}

export const getFromLocalStorage = key =>
  JSON.parse(window.localStorage.getItem(key))

export const updateItemFromList = (value, list) => {
  return list.map(obj => (obj.id === value.id ? value : obj))
}

export const removeItemFromList = (id, list) =>
  list.filter(obj => obj.id !== id)
