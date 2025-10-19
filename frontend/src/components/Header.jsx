import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Cart</a></li>
      <li>
        <details>
          <summary>Hari26</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Light</a></li>
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