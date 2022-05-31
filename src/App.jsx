import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './components/Login';
import List from './components/List/List';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Resultados from './pages/Resultados/Resultados';
// import { useState } from 'react';
import swAlert from '@sweetalert/with-react';
import Favoritos from './pages/Favoritos/Favoritos';


export default function App() {
    
    const [favoritesList, setFavoritesList] = useState([])

    useEffect(() => {
        const isFavoriteLocal = localStorage.getItem('favs')
        if (isFavoriteLocal !== null) {
            setFavoritesList(JSON.parse(isFavoriteLocal))            
        }
    }, [])
    
    const addOrRemoveFromFav = (evt) => {

        // const listFavs = localStorage.getItem('favs')
        

        const btn = evt.currentTarget
        const parent = btn.parentElement
        const imgUrl = parent.querySelector('img').getAttribute('src')
        const title = parent.querySelector('h5').innerText 
        const overview = parent.querySelector('p').innerText 
        const id = btn.dataset.movieId
        
        const movieData = {id, imgUrl, title, overview }
        
        // console.log(tempMoviesFavs)
        const isInMoviefavs = favoritesList.findIndex(item => item.id === movieData.id)

        // console.log(isInMoviefavs)

        if(isInMoviefavs  === -1){
            let addMovie = favoritesList
            addMovie.push(movieData)
            setFavoritesList([ ...addMovie ])
            localStorage.setItem('favs', JSON.stringify(favoritesList))
            console.log('La película se agrego a favs correctamente.')
        } else {
            let removeMovie = favoritesList.filter(movie => movie.id !== movieData.id)
            localStorage.setItem('favs', JSON.stringify(removeMovie))
            setFavoritesList(removeMovie)
            console.log('La película se Elimino de favs correctamente.')
        }
    }

    return (
        <>
            <Header 
                //cambiarCondicion={cambiarCondicion} 
                favoritesList = { favoritesList }
            />
            <div className="container">
                {/* <L */}
                <Routes>
                    <Route path="/" element={ <Login /> } />                
                    <Route path="/list" element={ <List addOrRemoveFromFav={ addOrRemoveFromFav } /> } />    
                    <Route path="/detail" element={ <MovieDetail /> } />    
                    <Route path="/resultados/:keyword" element={ <Resultados /> } />     
                    <Route path="/favoritos" element={  <Favoritos 
                                                            addOrRemoveFromFav = { addOrRemoveFromFav } 
                                                            favoritesList = { favoritesList }
                                                        /> 
                    } />     
                    {/* <Route path="/contacto" element={ <List /> } />     */}
                    <Route path="/*" element={ <Navigate to="/" replace /> } />    
                </Routes>
                <Footer />
            </div>
        </>
    );
}
