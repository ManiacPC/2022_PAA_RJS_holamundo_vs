import React, { useState } from 'react'

// function App() {
const App = () => {
    // estados (variables)
    const [contador, setContador] = useState(0)
    const [nombre, setNombre] = useState("")
    // const [nom, setNom] = useState(<valor_por_defecto>)


    // Podemos crear funciones dentro de la función APP
    // function manejarClick()
    const manejarClick = (e) => {
        // declaramos nuevo contador y incrementamos en 1
        let nuevoContador = contador + 1 // contador++

        setContador(nuevoContador) // modifica el estado "contador"
    }

    // Funcion para manejar la escritura del nombre
    // y actualizar el estado
    // function manejarNombre() { ... }
    // Cuando se crea una función a partir de un
    // evento (onClick, onChange, etc.). Tiene que
    // recibir como parámetro el objeto de evento,
    // que generalmente suele llamarse "e" o "event"
    const manejarNombre = (e) => {
        // desde el evento del input de nombre (e)
        // obtenemos el valor escrito desde
        // las propiedades "target.value"
        let nombreEscrito = e.target.value

        // modificamos el estado
        setNombre(nombreEscrito)
    }

    // funcion para manejar el saludo
    const manejarSaludo = (e) => {
        alert(`Hola ${nombre}!`)
    }

    return (
        <div>
            <h1>Hola mundo!</h1>
            {/*<p>{new Date().toString()}</p>*/}
            <p>Valor contador: {contador}</p>
            <p>{1 + 1}</p>
            <button type="button" onClick={manejarClick}>Aumentar contador</button>

            <hr />

            <h2>Nombre</h2>
            <input type="text"
                placeholder="Ingrese su nombre"
                onChange={manejarNombre}
            />
            <br />
            <button type="button" onClick={manejarSaludo}>Saludar</button>
        </div>
    )
}

export default App
