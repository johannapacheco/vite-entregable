
const Ingeniero = ({item, setTurno}) => {
    console.log(item)
    const {nombre, especialidad} = item
    
    return(
        <div>
            <h3>Ingeniero: {nombre} </h3>
            <h4>Especialidad: {especialidad} </h4>
            <button onClick={() => setTurno({ingeniero: item, form:true})}> sacar turno</button>
        </div>
    )
}

export default Ingeniero