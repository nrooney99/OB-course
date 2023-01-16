import React, { Component } from 'react'

export default class DidUpdate extends Component { 
    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambia su estado')
    }
    render() {
        return (
            <div>DidUpdate</div>
        )
    }
}

export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambia su estado')
    })
    return (
        <div>DidUpdate</div>
    )
}

