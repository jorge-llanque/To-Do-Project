import Todos from './components/Todos'
import './App.css'
import { TodosContextProvider } from './context/TodosContext'

function App() {
  return (
    <div className='App'>
      <TodosContextProvider>
        <Todos />
      </TodosContextProvider>
    </div>
  )
}

export default App
