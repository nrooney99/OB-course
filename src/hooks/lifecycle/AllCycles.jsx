import React, { useEffect } from 'react'

export const AllCycles = () => {
    useEffect(() => {

        console.log("Componente creado")

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Hola')
        }, 1000);

        return () => {
            console.log("Componente terminado");
            clearInterval(intervalID);
            document.title = "Tiempo detenido"
        }
    }, [])
    
    return (
        <div>AllCycles</div>
    )
}
