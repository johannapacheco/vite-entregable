import {useState} from 'react'

const Form = ({ingeniero}) => {
    const [cliente, setCliente] = useState( {
        nombre: '',
        obra: ''
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)
    console.log(cliente)
    const handleSubmit = (event) => {
        event.preventDefault()
        if(cliente.nombre.length > 3){
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }
        

    }
return (
    <div>
        <p>Vas a sacar turno con el ingeniero: {ingeniero.nombre}</p>
        <form onSubmit ={handleSubmit}> 
            <label>Cliente: </label>
            <input type='text' onChange={(event) => setCliente({...cliente, nombre: event.target.value})}/>
            <label>Nombre de la obra: </label>
            <input type='text'onChange={({target}) => setCliente({...cliente, Cliente: target.value})}/>
            <button>Agendar</button>
        </form>
        {show && <h4> {cliente.nombre}, se ha agendado su turno para el 12 de marzo </h4>}
        {err && <p>Por favor, coloque la información correctamente. </p>}
        <hr />
  </div>
)

}

export default Form