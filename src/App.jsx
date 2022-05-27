import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './components/Login';
import List from './components/List/List';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetail from './components/MovieDetail/MovieDetail';


export default function App() {
    return (
        <>
            <Header />
            <div className="container">
                {/* <L */}
                <Routes>
                    <Route path="/" element={ <Login /> } />                
                    <Route path="/list" element={ <List /> } />    
                    <Route path="/detail" element={ <MovieDetail /> } />    
                    {/* <Route path="/contacto" element={ <List /> } />     */}
                    <Route path="/*" element={ <Navigate to="/" replace /> } />    
                </Routes>
                <Footer />
            </div>
        </>
    );
}
