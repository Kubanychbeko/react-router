import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import a from '../images/buts/img1.svg'
import b from '../images/buts/img2.svg'
import v from '../images/buts/img3.svg'
import p from '../images/buts/image 5.svg'

const Buts = () => {

 
  return (
    <div className="butz">
      <h1>Все кроссовки</h1>
      <input type="text" placeholder="Поиск..." />
      <div className="butz1">
        <div className="buts">
          <div className="buts1">
            <img src={p} alt="" />
          </div>
          <p>bouih</p>
        </div>

       

      </div>
    </div>
  )
}

export default Buts
