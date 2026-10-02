import Tabla from './component/Tabla'
import { useState } from 'react'

import './App.css'
import JatekAllas from './component/jatekAllas'


function App() {
  const [adat,setAdat]=useState(["", "", "", "", "", "", "", "", ""])
  const [lepes,setLepes]=useState(0)




  function kattintas(index: number) {
  if (adat[index] !== "") {
    return
  }

  const ujAdat = [...adat]

  if (lepes % 2 === 0) {
    ujAdat[index] = "X"
  } else {
    ujAdat[index] = "O"
  }

  setAdat(ujAdat)
  setLepes(lepes + 1)
}
  return (
    <>    
    <main>
    <header>
      <h1>Welcome to the Tic Tac Toe Game</h1><button onClick={() => { setAdat(["", "", "", "", "", "", "", "", ""]); setLepes(0); }}>Új játék</button>
    </header>
      <Tabla tabla={adat} kattintas ={kattintas} />
      <JatekAllas lepes={lepes} />
    </main>
    </>
  )
}

export default App
