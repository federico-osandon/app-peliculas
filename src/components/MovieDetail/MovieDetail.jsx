import { useEffect } from "react"
import { Navigate } from "react-router-dom"

import './MovieDetail.css'

const MovieDetail = () => {    
    const token = sessionStorage.getItem('token')
    
    if (token === null) {        
        return <Navigate to='/' replace />
        // navigate("../List/List", { replace: true });
    }  

    let query = new URLSearchParams(window.location.search)
    let movieId = query.get('movieId')

    useEffect(() => {
        // https://api.themoviedb.org/3/movie/${movieId}?api_key=<<api_key>>&language=es-ES
        console.log(movieId)
    }, [movieId])
    

    return (
        <div className="row grande">
            <h5>Título: Falso</h5>
            <div className="col-4">
                Imágen 
            </div>
            <div className="col-8">                
                <h5>Fecha de Estreno: </h5>
                <h5>Reseña: </h5>
                <p>lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
                </p>
                <h5>Géneros: </h5>
                <ul>
                    <li>Genero1</li>
                    <li>Genero2</li>
                    <li>Genero3</li>
                    <li>Genero4</li>
                    <li>Genero5</li>
                </ul>
            </div>
        </div>
    )
}

export default MovieDetail