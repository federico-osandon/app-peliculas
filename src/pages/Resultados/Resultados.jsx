import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import swAlert from '@sweetalert/with-react'

const Resultados = () => { 
    const [moviesResults, setMoviesResults] = useState([])

    const { keyword } = useParams()
    // let query = new URLSearchParams(window.location.search)     
    // let keyword = query.get('keyword')
    const token = sessionStorage.getItem('token')
    if (token === null) {
        console.log('es null')
        return <Navigate to='/' replace />        
    } 
    
    useEffect(() => {
        let endPoint = `https://api.themoviedb.org/3/search/movie?api_key=14db4c983f9fab372331aeefe3a4855b&language=es-ES&page=1&include_adult=false&query=${keyword}`
        axios.get(endPoint)
        .then(response => {
            let moviesArray = response.data.results            
            if ( moviesArray.length === 0 ) {
                swAlert(<h2>No se encontro resultado. </h2>)                               
            }
            setMoviesResults(moviesArray)
        })
        .catch(err => {
            console.error(err)
            swAlert(<h2>Hubo Errores. Intenta mas tarde. </h2>)
        })
    }, [keyword])    
    
    return (
        <>
            <h2>Buscate: <em>{ keyword }</em></h2>
            <p></p>
            <div className='row'>
                { moviesResults.length === 0 && <h2>No se encontro resultado </h2>}
                { moviesResults.map(card => <div key={card.id} className="col-4">
                                                <div className="card mt-3" >
                                                    <img src={`https://image.tmdb.org/t/p/w500${card.poster_path}`} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{ `${card.title.substring(0,10)}...` }</h5>
                                                        <p className="card-text">{ `${card.overview.substring(0,100)}...` }</p>
                                                        <Link to={`/detail?movieId=${card.id}`} className="btn btn-primary">View Detail</Link>
                                                    </div>
                                                </div>
                                            </div>  
                )}                
            </div>
        </>
    )
}

export default Resultados