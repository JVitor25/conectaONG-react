import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/paginas/login/Login";

export default function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/home" element={<Home />} /> */}
          {/* {<Route path="/cadastro" element={<CadastroUsuario />} />} */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>

  )
}