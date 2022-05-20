import { Navigate } from 'react-router-dom'

const List = () => {
    // const navigate = useNavigate()

    const token = localStorage.getItem('token')
    console.log(token)
    // console.log('hola soy list')
    if (token === null) {
        console.log('es null')
        return <Navigate to='/' replace />
    }

    return (
        <div>list</div>
    )
}

export default List