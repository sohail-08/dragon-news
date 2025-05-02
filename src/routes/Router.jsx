import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";


const Router = createBrowserRouter(
    [
        {
            path: '/',
            Component: HomeLayout,
            children: [
                {
                    path:"",
                    element: <Home></Home>
                },

                {
                    path:"/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch('/news.json')
                },
                {
                    path:"",
                    element: <Home></Home>
                }
            ]
        },
        {
            path: 'auth',
            element: <h2>authentication</h2>
        },
        {
            path: 'news',
            element: <h2>news</h2>
        },
        {
            path: '*',
            element: <h2>error</h2>
        }
    ]
);
export default Router