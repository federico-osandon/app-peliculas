// import { useEffect } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
//14db4c983f9fab372331aeefe3a4855b esto es la api key de mi app
// https://api.themoviedb.org/3/movie/550?api_key=14db4c983f9fab372331aeefe3a4855b solicitud

// https://api.themoviedb.org/3/discover/movie?api_key=14db4c983f9fab372331aeefe3a4855b&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
const List = () => {
    const [movieList, setMovieList] = useState([])
    // const navigate = useNavigate()
    
    const token = localStorage.getItem('token')
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
    }, [])   
    console.log(movieList)
    return (
        <div className='row'>
            { movieList.map(card => <div key={card.id} className="col-4 mt-3">
                                        <div className="card" >
                                        <img src={card.poster_path} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Movie title</h5>
                                            <p className="card-text">Reveiw Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="/" className="btn btn-primary">View Detail</Link>
                                        </div>
                                        </div>
                                    </div>  
            )}                
        </div>
    )
}

export default List