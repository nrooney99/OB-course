import React from 'react'

const FetchExample = () => {

    const fetchData = async() => {

        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(data=>console.error(data.data));
        
    }


    return (
        <button onClick={fetchData}>FETCH</button>
    )
}

export default FetchExample