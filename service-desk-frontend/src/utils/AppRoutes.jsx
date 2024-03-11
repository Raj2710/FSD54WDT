import Home from '../components/Home'
import Create from '../components/Create'
import Login from '../components/Login'
import Status from '../components/Status'
import { Navigate } from 'react-router-dom'
const Approutes = [
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/create',
        element: <Create/>
    },
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/status',
        element: <Status/>
    },
    {
        path:'*',
        element: <Navigate to = '/'/>
    }
]

export default Approutes