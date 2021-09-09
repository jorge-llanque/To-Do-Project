import { useReducer } from 'react'

const ACTIONS = {
  ADD_TASK: 'add_task',
  UPDATE_TASK: 'update_task',
  REMOVE_TASK: 'remove_task',
}
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [action.payload, ...state]
    case ACTIONS.UPDATE_TASK:
      return state.map(obj =>
        action.payload.id === obj.id ? action.payload : obj
      )
    case ACTIONS.REMOVE_TASK:
      return state.filter(obj => obj.id !== action.payload)
    default:
      return state
  }
}

function useTasks() {
  const [state, dispatch] = useReducer(reducer, [])
  console.log(state)
  return {
    todoList: state,
    addTask: task => dispatch({ type: ACTIONS.ADD_TASK, payload: task }),
    updateTask: newTask =>
      dispatch({ type: ACTIONS.UPDATE_TASK, payload: newTask }),
    removeTask: taskId =>
      dispatch({ type: ACTIONS.REMOVE_TASK, payload: taskId }),
  }
}

export default useTasks
