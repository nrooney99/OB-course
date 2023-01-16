import React from 'react'

const Ejemplo4 = (props) => {
  return (
    <div>
        <h1>Ejemplo de children props</h1>
        {props.children}
        <p>Texto abajo de children</p>
    </div>
    
  )
}

export default Ejemplo4