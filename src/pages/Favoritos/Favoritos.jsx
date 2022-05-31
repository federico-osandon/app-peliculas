import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"

const Favoritos = ({ addOrRemoveFromFav, favoritesList }) => {
    
    const token = sessionStorage.getItem('token')
           
    if (token === null) {
        console.log('es null')
        return <Navigate to='/' replace />        
    }   

    return (
        <div className="row">
            { favoritesList.length > 0 ?    favoritesList.map(card => <div key={card.id} className="col-4">
                                                                        <div className="card mt-3" >
                                                                            <img src={`https://image.tmdb.org/t/p/w500${card.imgUrl}`} className="card-img-top" alt="..." />
                                                                            {/* <button className='favourite-btn'>❤️</button> */}
                                                                            <button 
                                                                                className = 'favourite-btn'
                                                                                onClick = {addOrRemoveFromFav}
                                                                                data-movie-id = {card.id}
                                                                            >
                                                                                🖤
                                                                            </button>
                                                                            <div className="card-body">
                                                                                <h5 className="card-title">{ `${card.title.substring(0,10)}...` }</h5>
                                                                                <p className="card-text">{ `${card.overview.substring(0,100)}...` }</p>
                                                                                <Link to={`/detail?movieId=${card.id}`} className="btn btn-primary">View Detail</Link>
                                                                            </div>
                                                                        </div>
                                                                    </div> 
                                        

                                                            )
                                        :
                                        <h1>No hay películas en favoritos</h1>
            }
        </div>
    )
}

export default Favoritos