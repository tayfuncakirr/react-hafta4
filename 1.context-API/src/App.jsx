import { useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './context/ThemeContext'
import { LangProviderContext } from './context/LangContext'
import Container from './Container'



// React’te prop drilling sorununu çözmek için gelen dahili (React’in içinde hazır bulunan)
//  bir mekanizmadır.
//Normalde React’te veriyi bir üst component’ten alt component’e aktarmak için props kullanırsın.
//Ama bazen çok derin component hiyerarşilerinde, veriyi taşımak için arada hiçbir iş yapmayan
//componentlerden props geçirmek zorunda kalınabilir.
//Buna prop drilling denir.
function App() {
 

  return (
    <div>
       <LangProviderContext>
        <ThemeContextProvider>
         <Container/>
        </ThemeContextProvider>
        </LangProviderContext> 
        </div>
  )
}

export default App
