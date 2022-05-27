// import { useEffect } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import swAlert from '@sweetalert/with-react'

//14db4c983f9fab372331aeefe3a4855b esto es la api key de mi app
// https://api.themoviedb.org/3/movie/550?api_key=14db4c983f9fab372331aeefe3a4855b solicitud

// https://api.themoviedb.org/3/discover/movie?api_key=14db4c983f9fab372331aeefe3a4855b&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
const List = () => {
    const [movieList, setMovieList] = useState([])
    // const navigate = useNavigate()
    
    const token = sessionStorage.getItem('token')
    // console.log(token)        
    if (token === null) {
        console.log('es null')
        return <Navigate to='/' replace />
        // navigate("../List/List", { replace: true });
    }   
    
    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=14db4c983f9fab372331aeefe3a4855b&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
        axios.get(endPoint)
        .then(respuesta => {
            const apiData = respuesta.data.results
            setMovieList(apiData)
        })
        .catch(err => {
            console.log(err)
            swAlert(<h2>Hubo Errores. Intenta mas tarde. </h2>)
        })
    }, [])   
    console.log(movieList)

    return (
        <div className='row'>
            { movieList.map(card => <div key={card.id} className="col-4">
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
    )
}

export default List