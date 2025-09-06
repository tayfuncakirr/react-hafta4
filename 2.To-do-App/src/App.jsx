import './App.css'
import Header from './header'
import Content from './content'
import { TodoProvider } from './context/TodoContext'



function App() {

  return (
    <TodoProvider>
        <section className="todoapp">
          <Header/>
           <Content/>
        </section>
    </TodoProvider>
  )
}

export default App
