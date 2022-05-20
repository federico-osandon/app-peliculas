import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

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
        <div>list</div>
    )
}

export default List