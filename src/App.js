import Todos from './components/Todos'
import { TodosContextProvider } from './context/TodosContext'
import { CategoriesContextProvider } from './context/CategoriesContext'

function App() {
  return (
    <CategoriesContextProvider>
      <TodosContextProvider>
        <Todos />
      </TodosContextProvider>
    </CategoriesContextProvider>
  )
}

export default App
