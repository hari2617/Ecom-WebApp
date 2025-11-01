import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


import {changeTheme} from "../../slices/themeSlice"


const Header = () => {

  const {cartItem}=useSelector((state)=>state.cart)
  const theme=useSelector((state)=>state.theme)
 

  const dispatch=useDispatch();

  

  return (
    <div>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='./Cart'>Cart({cartItem.length})</Link></li>
      <li>
        <details>
          <summary>Hari26</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><button onClick={()=>dispatch(changeTheme(theme==="light"?"dark":"light"))}>  {theme === "light" ? " Dark" : "Light"}</button></li>
            <li><a>Logout</a></li>
            <li><a>Log in</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Header