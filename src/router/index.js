import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Auth from "../pages/Auth";
import SubCategories from "../pages/SubCategories";
import AdsItems from "../pages/AdsItems";
import FinalItemId from "../pages/FinalItemId";
import Profile from "../pages/Profile";
import Contacts from "../pages/Contacts";

export const privateRoutes = [

];

export const publicRoutes = [
  { path: "/posts", element: Posts },
  { path: "/login", element: Auth },
  { path: "/registation", element: Auth },
  { path: "/about", element: About },
  { path: "/contacts", element: Contacts },
  { path: "/profile", element: Profile },
  { path: "/posts/:subcategories", element: SubCategories },
  { path: "/posts/:subcategories/ads", element: AdsItems },
  { path: "/posts/:category/:subcategory/:id", element: FinalItemId },
  { path: "/posts/:subcategories/:id", element: PostIdPage },
  { path: "/posts/:subcategories/:id/*", element: PostIdPage },
];