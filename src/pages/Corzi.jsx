import React from 'react'
import { NavLink } from 'react-router-dom'
import kuti from '../images/image 9.png'
import a from './Corzi.module.css'

const Corzi = () => {
  return (
    <div>
       <div className={a.bop}>
      <div className={a.boi1}>
        <img src={kuti} />
        <h1>У вас нет заказов</h1>
        <p>Вы нищеброд?  Оформите хотя бы один заказ.</p>
      </div>

      <div className={a.boi2}>
        <button><NavLink to="/"> <b>Вернуться назад</b></NavLink></button>
      </div>
    </div>
</div>

  )
}

export default Corzi