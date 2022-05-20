import Login from "./components/Login";
import { Routes, Route, Navigate } from 'react-router-dom'
import List from "./components/List/list";


export default function App() {
  return (
        <>
            <h2>Hola Mundo</h2>
            <Routes>
                <Route path="/" element={ <Login /> } />                
                <Route path="/list" element={ <List /> } />    
                <Route path="/*" element={ <Navigate to="/" replace /> } />    
            </Routes>
        </>
  );
}
