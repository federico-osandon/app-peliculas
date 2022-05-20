import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>
                        Inicio
                    </NavLink> 
                </li>
                <li>
                    <NavLink to='/list'>
                        Listado
                    </NavLink> 
                </li>
                <li>
                    <NavLink to='/contacto'>
                        Contacto
                    </NavLink> 
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header