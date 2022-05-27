import { Navigate, useNavigate } from 'react-router-dom'
import axios from "axios";
import swAlert from '@sweetalert/with-react'

function Login() {

    const navigate = useNavigate()
    console.log(navigate)
    
    const handlerSubmit = (evt) => {
        evt.preventDefault();
    

    const email = evt.target.email.value
    const password = evt.target.password.value

    if (email === "" || password === "") {
        swAlert(
            <div>
                <h2>Los campos no deben estar vacíos</h2>
                <p>lorem ipsum dolor sit amet, consectetur</p>
            </div>
        )    
        return
    }
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email !== "" && !regexEmail.test(email)) {
        swAlert(
            <div>
                <h2>Se debe escribir un email válido</h2>
                <p>lorem ipsum dolor sit amet, consectetur</p>
            </div>            
        )
      return
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
        swAlert(
            <div>
                <h2>Credenciales inválidas</h2>
                <p>lorem ipsum dolor sit amet, consectetur</p>
            </div>            
        )
      return
    }

    axios
        .post("http://challenge-react.alkemy.org", {
            email, password
        })
        .then((resp) => {
            swAlert(
                <div>
                    <h2>Perfecto estás dentro</h2>
                    <p>lorem ipsum dolor sit amet, consectetur</p>
                </div>
            )
            const { token } = resp.data 
            sessionStorage.setItem('token', token)
            navigate('/list', {replace: true})
        })
        .catch((err) => console.log(err.message));
  };

  const token = sessionStorage.getItem('token')  
  if (token) {      
      return <Navigate to='/list' replace />
  }  

  return (
    <>
      <h2>Formulario de Login</h2>
      <form onSubmit={handlerSubmit} className="form-control w-25">
        <label className="w-100">
          <span>Email: </span>
          <br />
          <input type="text" name="email" placeholder="email" className="form-control"/>
        </label>
        <br />
        <label className="w-100">
          <span>Password: </span>
          <br />
          <input type="password" name="password" placeholder="password" className="form-control" />
        </label>
        <br />
        <br />
        <button type="submit" className='btn btn-success w-100'>Ingresar</button>
      </form>
    </>
  );
}

export default Login;
