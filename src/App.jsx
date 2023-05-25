import { createContext } from "react";
import AppRouter from './components/AppRouter';
import { HashRouter } from 'react-router-dom';
import "./styles/App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserStore from "./store/useStore";
import DeviceStore from "./store/DeviceStore";

export const Context = createContext(null);

function App() {
  return (
    <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore
    }}>
      <HashRouter>
        <Navbar></Navbar>
        <AppRouter />
        <Footer></Footer>
      </HashRouter>
    </Context.Provider>
  )
}

export default App;
