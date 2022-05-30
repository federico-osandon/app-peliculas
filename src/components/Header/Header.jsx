import React from 'react'
import { NavLink } from 'react-router-dom'
import Buscador from '../Buscador/Buscador'

const Header = () => {
    // console.log(cambiarCondicion)
  return (
    <header>
        <nav class="navbar navbar-expand-lg bg-dark" style={{ color: 'white' }}>
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/list">Listado</NavLink>
                    </li>
                   
                </ul>
                
                </div>
            <Buscador 
                //cambiarCondicion={cambiarCondicion} 
            />
            </div>
        </nav>
    </header>
  )
}

export default Header