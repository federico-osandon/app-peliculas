import swAlert from "@sweetalert/with-react";
import { Navigate, useNavigate } from "react-router-dom";

const Buscador = () => {
    // console.log(cambiarCondicion)
    const navigate = useNavigate()
    
    const handlerSubmit = (e) => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim()             
        // console.lo g(keyword)
        
        if (keyword.length === 0) {
            swAlert(<h2>Debe ingresar una palabra</h2>)            
        } else if(keyword.length < 4){
            swAlert(<h2>Debe ingresar más de cuatro carácteres</h2>)            
        } else {
            e.currentTarget.keyword.value = ''
            // navigate(`/resultados?keyword=${keyword}`);
            
            navigate(`/resultados/${keyword}`);
            // <Navigate to={`/resultados?keyword=${keyword}`} />
            // cambiarCondicion()
        }
        
    }

    return (
        <form 
            onSubmit={handlerSubmit} 
            className="d-flex align-items-center"
        >
            <label className="form-label mb-0 mx-2">           
                <input type="text" name="keyword" className="form-control" placeholder="Ingresar la Película..."/>
            </label>        
            <button type="submit" className='btn btn-success rounded-circle'>Buscar</button>
        </form>
    )
}

export default Buscador