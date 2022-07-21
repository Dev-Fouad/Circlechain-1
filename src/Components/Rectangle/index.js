import React from 'react'
import './index.scss'
function Rectangle(props) {
  return (
    <div className=' container rectangle'>
        <h5>{props.h5}</h5>
        <p>{props.p}</p>
    </div>
  )
}

export default Rectangle