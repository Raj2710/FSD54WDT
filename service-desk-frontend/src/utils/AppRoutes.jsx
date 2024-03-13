import Home from '../components/Home'
import Create from '../components/Create'
import Login from '../components/Login'
import Status from '../components/Status'
import Dashboard from '../components/admin/Dashboard'
import Service from '../components/admin/Service'
import Users from '../components/admin/Users'
import SuperAdminProtectedRoute from './SuperAdminProtectedRoute'
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
        path:'/admin/dashboard',
        element:<Dashboard/>
    },
    {
        path:'/admin/service/:id',
        element:<Service/>
    },
    {
        path:'/admin/users',
        element:<SuperAdminProtectedRoute><Users/></SuperAdminProtectedRoute>
    },
    {
        path:'/admin/*',
        element:<Navigate to='/admin/dashboard'/>
    },
    {
        path:'*',
        element: <Navigate to = '/'/>
    }
]

export default Approutes