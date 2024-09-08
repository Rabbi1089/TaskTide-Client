import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Login from '../pages/authentication/Login';
import Registration from '../pages/authentication/Registration';
import JobDetails from '../pages/JobDetails';
import ErrorPage from '../pages/ErrorPage';
import AddJob from '../pages/AddJob';
import MyPostedJobs from '../pages/MyPostedJobs';
import UpdateJob from '../pages/UpdateJob';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main />,
        errorElement : <ErrorPage />,
        children : ([
            {
                index : true,
                element : <Home />,
               
            },

            {
                path : '/login',
                element : <Login />
            },

            {
                path : '/register',
                element : <Registration />
            },

            {
                path : '/jobs/:id',
                element : 
                <PrivateRoute>
                <JobDetails />
                </PrivateRoute>,
                loader: ({ params }) =>
                fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
            },
            {
                path : '/update/:id',
                element :
                <PrivateRoute>
                <UpdateJob />
                </PrivateRoute>,
                loader: ({ params }) =>
                fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
            },

            {
                path : 'add-job',
                element :<PrivateRoute>
                <AddJob />
                </PrivateRoute>
            },

            {
                path : 'posted-job',
                element : 
                <PrivateRoute>
                <MyPostedJobs></MyPostedJobs>
                </PrivateRoute>
                
            }
        ])
    }
])

export default router;