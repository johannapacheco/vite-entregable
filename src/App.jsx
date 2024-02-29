
import { useState } from 'react'
import './App.css'
import Ingeniero from './components/Ingeniero'
import Form from './components/Form'
import './App.css'

function App() {
  const [turno, setTurno] = useState({
    ingeniero: {},
    form: false
  })
  let ingenieros = [
    {id: 1, nombre: 'Neliett Fourtul', especialidad: 'estructuras'},
    {id: 2, nombre: 'Julian Castro', especialidad: 'vias'},
    {id: 3, nombre: 'Brayan Beltran', especialidad: 'geotecnia'},
    {id: 4, nombre: 'Johanna Pacheco', especialidad: 'hidraulica'}
  ]
  return (
    <>
        {turno.form && <Form ingeniero= {turno.ingeniero} />}
        {ingenieros.map((item) => <Ingeniero key={item.id} setTurno={setTurno} item={item}/>)}
    </>
    
     
  )
}

export default App
