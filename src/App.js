import Todos from './components/Todos'
import './App.css'
import { TodosContextProvider } from './context/TodosContext'

function App() {
  return (
    <TodosContextProvider>
      <Todos />
    </TodosContextProvider>
  )
}

export default App
