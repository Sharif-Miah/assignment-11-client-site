import { createBrowserRouter } from "react-router-dom";
import AddNewService from "../component/AddNewService/AddNewService";
import Blog from "../component/Blog/Blog";
import DetailsService from "../component/DetailsService/DetailsService";
import EditInput from "../component/EditInput/EditInput";
import FAQ from "../component/FAQ/FAQ";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import MyReview from "../component/MyReview/MyReview";
import PriveteRoute from "../component/PriveteRoute/PriveteRoute";
import Register from "../component/Register/Register";
import Services from "../component/Services/Services";
import Main from "../layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/services',
                // loader: () => fetch('https://server-site-reviw-website.vercel.app/allservices'),
                element: <Services />
            },
            {
                path: '/DetailsService/:id',
                element: <DetailsService />,
                loader: ({ params }) => fetch(`https://server-site-reviw-website-farhan-sharif.vercel.app/services/${params.id}`)
            },
            {
                path: '/AllDetailsService/:id',
                element: <DetailsService />,
                loader: ({ params }) => fetch(`https://server-site-reviw-website-farhan-sharif.vercel.app/allservices/${params.id}`)
            },
            {
                path: '/addnewservice',
                element: <PriveteRoute><AddNewService /></PriveteRoute>
            },
            {
                path: '/myreview',
                element: <PriveteRoute><MyReview /></PriveteRoute>,
                loader: () => fetch(`https://server-site-reviw-website-farhan-sharif.vercel.app/review`)
            },
            {
                path: '/editinput',
                element: <EditInput />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }

        ]
    }
])

export default routes;