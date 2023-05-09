import "./styles/App.css";
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthorizationContext } from "./context";
import { useEffect, useState } from "react";

function App() {
  const [isAuthorization, setIsAuthorization] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('authorization')) {
      setIsAuthorization(true)
    }
    setLoading(false)
  }, [])

  return (
    <AuthorizationContext.Provider value={{
      isAuthorization,
      setIsAuthorization,
      isLoading,
    }}>
      <BrowserRouter>
        <Navbar></Navbar>
        <AppRouter />
      </BrowserRouter>
    </AuthorizationContext.Provider>
  )
}

export default App;
