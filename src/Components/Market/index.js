import React from 'react'
import Trend from './Trend'
import './index.scss'
function Market() {
  return (
    <div className='container container1'>
        <h4>Market Trend</h4>
        <div className='trends'></div>
        <Trend />
        <Trend className='trends1'/>
        <Trend className='trends2'/>
        <Trend className='trends3'/>

    </div>
  )
}

export default Market