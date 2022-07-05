import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./paginas/login/Login";
import Home from "./paginas/home/Home";
import Sobre from "./paginas/sobre/Sobre";
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

export default function App() {
  
  return (
    <Router>
      <Navbar />
      <div className="visualizacao">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}