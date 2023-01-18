import React from 'react'
import { useParams } from 'react-router-dom'

const ParamsExample = () => {
    const { id } = useParams()
  return (
    <div>id: { id }
    </div>
  )
}

export default ParamsExample