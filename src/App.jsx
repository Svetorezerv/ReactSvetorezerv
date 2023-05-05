import "./styles/App.css";
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
