import React, { Component, useEffect } from 'react'

export default class WillUnmount extends Component {
    componentWillUnmount(){
        console.log("Comportamiento antes de que el componente desaparezca")
    }
    render() {
        return (
            <div>WillUnmount</div>
        )
    }
}

export const WillUnmount = () => {
    useEffect(() => {
        return () => {
            console.log("Comportamiento antes de que el componente desaparezca")
        }
    }, [])
    
    return (
        <div>WillUnmount</div>
    )
}
