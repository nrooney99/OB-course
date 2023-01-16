import React, { useState, useEffect, useRef } from 'react'


export const Ejemplo2 = () => {
    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)
    
    const miRef = useRef()

    function incrementar1() {
        setContador1(contador1+1)
    }
    function incrementar2() {
        setContador2(contador2+1)
    }

    useEffect(() => {
        console.log('cambio en el estado')
    }, [contador1])
    

    return (
    <div>
        <h2>CONTADOR 1: {contador1}</h2>
        <h2>CONTADOR 2: {contador2}</h2>
        <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
        <button onClick={incrementar1}>Incrementar 1</button>
        <button onClick={incrementar2}>Incrementar 2</button>
    </div>
  )
}
