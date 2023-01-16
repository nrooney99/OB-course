import React, { useState } from 'react'

export const Child = () => {
    
    const [inputValue, setInputValue] = useState('Default value')

    const handleCopy = (e) => {
        e.preventDefault()
        console.log("COPY")
    }

    return (
        <div>
            <p onCopy={handleCopy}>Child component</p>
            <input 
                value={inputValue}
                onChange={(e)=>{setInputValue(e.target.value)}}
                />
            <button onClick={()=> console.log(inputValue)}>Imprimir input value</button>
        </div>
    )
}