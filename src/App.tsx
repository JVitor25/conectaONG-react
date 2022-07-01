import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/paginas/login/Login";
import Home from "./components/paginas/home/Home";
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";

export default function App() {
  
  return (
    <Router>
      <Navbar />
      <div className="visualizacao">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* {<Route path="/cadastro" element={<CadastroUsuario />} />} */}
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}