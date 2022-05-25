import { useEffect } from 'react'
import { Navigate, Link } from 'react-router-dom'

const List = () => {
    // const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log(token)        
        if (token === null) {
            console.log('es null')
            return <Navigate to='/' replace />
        }      
    }, [])   

    return (
        <div className='row'>
            <div className="col-4">
                <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Movie title</h5>
                    <p className="card-text">Reveiw Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/" className="btn btn-primary">View Detail</Link>
                </div>
                </div>
            </div>            
            <div className="col-4">
                <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Movie title</h5>
                    <p className="card-text">Movie Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/" className="btn btn-primary">View Detail</Link>
                </div>
                </div>
            </div>            
            <div className="col-4">
                <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Movie title</h5>
                    <p className="card-text">Reveiw Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/" className="btn btn-primary">View Detail</Link>
                </div>
                </div>
            </div>            
        </div>
    )
}

export default List