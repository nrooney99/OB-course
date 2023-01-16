import React, { useContext, useState } from 'react'

const miContexto = React.createContext(null)
export const Componente1 = () => {
    const state = useContext(miContexto)
    return (
    <div>
        <h1>
            El Token es: {state.token}
        </h1>
        <Componente2/>
    </div>
  )
}


export const Componente2 = () => {
  const state = useContext(miContexto)
    return (
    <div>
        <h2>
            La sesión es: {state.session}
        </h2>
    </div>
  )
}


export const ComponenteConContexto = () => {
    const estadoInicial = {
        token: '13523523',
        session: 1,
    }

    const [sessionData, setSessionData] = useState(estadoInicial)

    function actualizarSession(){
        setSessionData(
            {
                token: 'JWT12345',
                session: sessionData.session + 1
            }
        )
    }

    return (
        <miContexto.Provider value={sessionData}>
            <Componente1/>
            <button onClick={actualizarSession}>Actualizar session</button>
        </miContexto.Provider>
    )
}


