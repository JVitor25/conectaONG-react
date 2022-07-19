import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./paginas/login/Login";
import Sobre from "./paginas/sobre/Sobre";
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import store from './store/store';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import AtualizarUsuario from './paginas/atualizarUsuario/AtualizarUsuario';
import Contato from './paginas/contato/Contato';
import Feed from './paginas/feed/Feed';
import PaginaInicial from './paginas/paginaInicial/PaginaInicial';
import Feed2 from './paginas/feed2/Feed2';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';

export default function App() {

  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/atualizarusuario/:id" element={<AtualizarUsuario />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/feed2" element={<Feed2 />} />
            <Route path="/formularioPostagem" element={<CadastroPost />} />
            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  )
}