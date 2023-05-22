import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllCubes from "../Pages/AllCubes/AllCubes";
import MyCubes from "../Pages/MyCubes/MyCubes";
import AddACube from "../Pages/AddACube/AddACube";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/404/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import CubeDetails from "../Pages/AllCubes/CubeDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/all-cubes',
                element: <AllCubes></AllCubes>,
                loader: () => fetch('http://localhost:5000/cubes')
            },
            {
                path: '/cubes/:id',
                element: <PrivateRoutes><CubeDetails></CubeDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/cubes/${params.id}`)
            },
            {
                path: '/my-cubes',
                element: <PrivateRoutes> <MyCubes></MyCubes> </PrivateRoutes>
            },
            {
                path: '/add-cube',
                element: <PrivateRoutes> <AddACube></AddACube> </PrivateRoutes>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>,
    }
])

export default router;