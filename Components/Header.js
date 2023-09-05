import React from 'react'
import { Link,NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <div>
        <a href="#">Logo</a>
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/About"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/Contact"}>Contact</NavLink>
                </li>
            </ul>
        </nav>
      
    </div>
  )
}
