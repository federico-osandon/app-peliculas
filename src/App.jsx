import { Routes, Route, Navigate } from 'react-router-dom'

import Login from "./components/Login";
import List from "./components/List/list";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
    return (
        <div className="container">
        
            <Header />
            <Routes>
                <Route path="/" element={ <Login /> } />                
                <Route path="/list" element={ <List /> } />    
                {/* <Route path="/contacto" element={ <List /> } />     */}
                <Route path="/*" element={ <Navigate to="/" replace /> } />    
            </Routes>
            <Footer />
        </div>
    );
}
