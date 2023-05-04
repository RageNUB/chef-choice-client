import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import Error from "../layouts/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Registration></Registration>
            },
            {
                path: "/chef-info/:id",
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({params}) => fetch(`https://chef-choice-server.vercel.app/chef-info/${params.id}`)
            },
            {
                path: "blog",
                element: <Blog></Blog>
            },
            {
                path: "*",
                element: <Error></Error>
            }
        ]
    }
])

export default router;