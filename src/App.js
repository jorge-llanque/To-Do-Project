import Todos from './components/Todos'
import { TodosContextProvider } from './context/TodosContext'
import { CategoriesContextProvider } from './context/CategoriesContext'
import { ModalContextProvider } from './context/ModalContext'

function App() {
  return (
    <ModalContextProvider>
      <CategoriesContextProvider>
        <TodosContextProvider>
          <Todos />
        </TodosContextProvider>
      </CategoriesContextProvider>
    </ModalContextProvider>
  )
}

export default App
