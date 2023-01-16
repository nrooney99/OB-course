import React, { useState } from 'react'

export default function Ejemplo1() {
    
    const valorInicial = 0;
    const personaInicial = {
        name: 'Nico',
        email: 'nrooney@itba.edu.ar',
    };

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);
    
    function incrementarContador() {
        setContador(contador + 1);
    }

    function actualizarPersona() {
        setPersona(
            {
                name: 'Pepe',
                email: 'pepe@asd.com'
            }
        )
    }

    return (
        <div>
            <h1>CONTADOR: {contador}</h1>
            <h3>Datos de persona: {persona.name} ({persona.email})</h3>
            <button onClick={incrementarContador}>Incrementar</button>
            <button onClick={actualizarPersona}>Cambiar persona</button>
        </div>
    )
}
