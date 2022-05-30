import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import swAlert from '@sweetalert/with-react'

import './MovieDetail.css'

const MovieDetail = () => {    
    const [movieDetail, setMovieDetail] = useState(null)
    const token = sessionStorage.getItem('token')
    
    if (token === null) {        
        return <Navigate to='/' replace />
        // navigate("../List/List", { replace: true });
    }  

    let query = new URLSearchParams(window.location.search)
    let movieId = query.get('movieId')

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=14db4c983f9fab372331aeefe3a4855b&language=es-ES`
        axios.get(endPoint)       
        .then(results => {
            let moviData = results.data
            setMovieDetail(moviData)
        })
        .catch(err => {
            console.log(err)
            swAlert(<h2>Hubo Errores. Intenta mas tarde. </h2>)
        })
    }, [movieId])


    console.log(movieDetail)    

    return (
        movieDetail ? 
            <>
                <h5 className="mt-3">Título: { movieDetail.title }</h5>
                <div className="row grande">
                    <div className="col-4">
                        <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} className="w-100" /> 
                    </div>
                    <div className="col-8">                
                        <h5> Fecha de Estreno: { movieDetail.release_date }</h5>
                        <h5> Reseña: </h5>
                        <p>{ movieDetail.overview }</p>
                        <h5> Rating: { movieDetail.vote_average }</h5>
                        <h5> Géneros: </h5>
                        <ul>
                            { movieDetail.genres.map(genre => <li key={genre.id}>{ genre.name }</li>) }                            
                        </ul>
                    </div>
                </div>
            </>
            : 
            <center>
                <h2>Cargando...</h2>
            </center>
        
        
    )
}

export default MovieDetail