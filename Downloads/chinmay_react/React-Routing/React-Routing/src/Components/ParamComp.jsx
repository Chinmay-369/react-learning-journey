import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComp = () => {
  const {id} = useParams();
  return (
    <>
      <div>
        <Navbar/>
        <ParamComp/>
      </div>
    </>
  )
}

export default ParamComp