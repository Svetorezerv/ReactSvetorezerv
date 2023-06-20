import { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import "./styles/App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { observer } from "mobx-react-lite";
import { Context } from "./index.js";
import Loader from "./components/UI/loader/Loader";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  const check = () => {
    if (localStorage.getItem('data')) {
      return true;
    } else return false;
  }

  useEffect(() => {
    setTimeout(() => {
      let checkIsLogin = check();
      if (checkIsLogin === true) {
        user.setUser(true);
        user.setIsAuth(true);
      }
      setLoading(false)
    }, 1000);
  })

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <AppRouter />
      <Footer></Footer>
    </BrowserRouter>
  )
});

export default App;
