import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Auth from "../pages/Auth";
import SubCategories from "../pages/SubCategories";
import AdsItems from "../pages/AdsItems";
import FinalItemId from "../pages/FinalItemId";

export const privateRoutes = [
  {path: "/about", element: About, exact: true},
  {path: "/posts", element: Posts, exact: true},
  {path: "/posts/:subcategories", element: SubCategories, exact: true},
  {path: "/posts/:subcategories/ads", element: AdsItems, exact: true},
  {path: "/posts/:category/:subcategory/:id", element: FinalItemId, exact: true},
  {path: "/posts/:subcategories/:id", element: PostIdPage, exact: true},
  {path: "/posts/:subcategories/:id/*", element: PostIdPage, exact: true},
];

export const publicRoutes = [
  {path: "/login", element: Auth},
  {path: "/registation", element: Auth},
];