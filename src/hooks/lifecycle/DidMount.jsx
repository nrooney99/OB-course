import React, { Component } from 'react'

export default class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM')
    }

    render() {
        return (
            <div>DidMount</div>
        )
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM')
    }, [])
    
    return (
        <div>DidMount</div>
    )
}
