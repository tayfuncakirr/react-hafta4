import { useState } from 'react'
import ThemeContext from './context/ThemeContext'
import './App.css'
import ChangeTheme from './components/ChangeTheme'

// React’te prop drilling sorununu çözmek için gelen dahili (React’in içinde hazır bulunan)
//  bir mekanizmadır.
//Normalde React’te veriyi bir üst component’ten alt component’e aktarmak için props kullanırsın.
//Ama bazen çok derin component hiyerarşilerinde, veriyi taşımak için arada hiçbir iş yapmayan
//componentlerden props geçirmek zorunda kalınabilir.
//Buna prop drilling denir.
function App() {
 

  return (
        <ThemeContext.Provider value="light">
         <ChangeTheme/>
        </ThemeContext.Provider>
  )
}

export default App
