import React from 'react'
import { NavLink } from 'react-router-dom'
import poi from '../images/Group.png'
import poi1 from '../images/Union.png'
import po2 from '../images/Vector.png'
import poi3 from '../images/image  (1).png'
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <div>
<div className="menu">

<div className="menu1">
    <NavLink to='/'><img src={poi3}/></NavLink>
    <div className="menu1-text">
        <h1>REACT SNEAKERS</h1>
        <p>Магазин лучших кроссовок</p>
    </div>
</div>

<div className="menu2">
  <div className="menu2_1">

    <NavLink to='/corzi'>    <ShoppingBasket/></NavLink>
    <span>1205 руб.</span>
  </div>
  <img src={po2} />
  <img src={poi1} />
</div>

</div>
<hr />



  
    </div>
  )
}

export default Header