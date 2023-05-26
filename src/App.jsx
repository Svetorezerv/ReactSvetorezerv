import { React, createContext } from "react";
import AppRouter from './components/AppRouter';
import { HashRouter } from 'react-router-dom';
import "./styles/App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserStore from "./store/useStore";
import { observer } from "mobx-react-lite";

export const Context = createContext(null);

const App = observer(() => {
  return (
    <Context.Provider value={{
      user: new UserStore()
    }}>
      <HashRouter>
        <Navbar></Navbar>
        <AppRouter />
        <Footer></Footer>
      </HashRouter>
    </Context.Provider>
  )
});

export default App;
