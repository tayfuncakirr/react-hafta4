import { useState } from 'react'
import './App.css'
import Header from './header'
import Content from './components/content'



function App() {

  return (
    <>
        <section className="todoapp">
          <Header/>
           <Content/>
        </section>
    </>
  )
}

export default App
