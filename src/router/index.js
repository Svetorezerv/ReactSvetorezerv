import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import Categories from "../pages/Categories";


export const privateRoutes = [
    {path: '/about', element: About, exact: true},
    {path: '/posts', element: Posts, exact: true},
    {path: '/posts/:categories', element: Categories, exact: true},
    {path: '/posts/:categories/:id', element: PostIdPage, exact: true},
]

export const publicRoutes = [
    {path: '/login', element: Login, exact: true},
]
