import React from 'react'
import bitcoin from '../assets/Coin Trend Item.png'
import eth from '../assets/Coin Trend Item (1).png'
import bnb from '../assets/Coin Trend Item (2).png'
import usdt from '../assets/Coin Trend Item (3).png'
import "./Trend.scss"
function Trend() {
  return (
    <div className='container crypto'>
        <img src={bitcoin} alt=""/>
        <img src={eth} alt=""/>
        <img src={bnb} alt=""/>
        <img src={usdt} alt=""/>

    </div>
  )
}

export default Trend