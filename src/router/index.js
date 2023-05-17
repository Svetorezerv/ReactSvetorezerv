import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import SubCategories from "../pages/SubCategories";
import AdsItems from "../pages/AdsItems";


export const privateRoutes = [
    {path: '/about', element: About, exact: true},
    {path: '/posts', element: Posts, exact: true},
    {path: '/posts/:subcategories', element: SubCategories, exact: true},
    {path: '/category/:subcategories/ads', element: AdsItems, exact: true},
    {path: '/posts/:subcategories/:id', element: PostIdPage, exact: true},
    {path: '/posts/:subcategories/:id/*', element: PostIdPage, exact: true},
]

export const publicRoutes = [
    {path: '/login', element: Login, exact: true},
]
