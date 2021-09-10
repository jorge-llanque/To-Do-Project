import Todos from './components/Todos'
import { TodosContextProvider } from './context/TodosContext'

function App() {
  return (
    <TodosContextProvider>
      <Todos />
    </TodosContextProvider>
  )
}

export default App
