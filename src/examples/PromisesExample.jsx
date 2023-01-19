import React from 'react'

const PromisesExample = () => {
  
  async function receiveMessage() {
    //Esto simula una promesa de un fetch a un servidor que tarda 2 segundos en volver
    let promise = new Promise((resolve,reject) => {
      setTimeout(() => resolve('Hello'), 2000)
    })
    alert( await promise.then((response)=> 'Mensaje recibido: ' + response) );
  } 
  async function receiveMessages() {
    let promise1 = new Promise((resolve,reject) => {
      setTimeout(() => {resolve('Hello 1')}, 1000)
    })
    let promise2 = new Promise((resolve,reject) => {
      setTimeout(() => resolve('Hello 2'), 2000)
    })

    Promise.all([promise1, promise2]).then(values=>alert(`${values[0]}\n${values[1]}`))
  } 

  return (
    <button onClick={receiveMessage}>Receive message</button>
  )
}

export default PromisesExample