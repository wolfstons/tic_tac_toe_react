import Tabla from './component/Tabla'
import { useState } from 'react'

import './App.css'
interface tablaProps {
  tabla: string[];
  onClick: (index: number) => void;
}

function App() {
  const [adat,setAdat]=useState(["", "", "", "", "", "", "", "", ""])
  const [lepes,setLepes]=useState(0)




  function kattintas(index: number) {
    console.log(index)
    if (lepes % 2 === 0) {
      setAdat(adat[index]="X")

     /*  setAdat(); */
    }else{
      setAdat(adat[index]="O")
    }
    setLepes(lepes+1)

}
  return (
    <>    
    <main>
    <header>
      <h1>Welcome to the Tic Tac Toe Game</h1>
    </header>
      <Tabla tabla={adat} kattintas ={kattintas} />
    </main>
    </>
  )
}

export default App
