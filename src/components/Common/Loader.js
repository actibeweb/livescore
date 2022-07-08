import React from 'react'
import './style.css'

const Loader = () => {
  return (
    <div style={{height:"100vh",width:"100vw"}} > 

    <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader