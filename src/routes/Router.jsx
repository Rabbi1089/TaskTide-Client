import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main />,
        children : ([
            {
                index : true,
                element : <Home />
            },

            {
                path : '/login',
                element : <Login />
            },

            {
                path : '/register',
                element : <Registration />
            }
        ])
    }
])

export default router;