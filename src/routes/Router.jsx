import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import JobDetails from "../pages/JobDetails";
import ErrorPage from "../pages/ErrorPage";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";

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
                element : <JobDetails />,
                loader: ({ params }) =>
                fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`),
            },

            {
                path : 'add-job',
                element : <AddJob />
            },

            {
                path : 'posted-job',
                element : <MyPostedJobs></MyPostedJobs>
            }
        ])
    }
])

export default router;