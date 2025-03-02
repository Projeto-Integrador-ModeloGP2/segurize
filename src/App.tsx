import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/home/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import ListaPlanos from "./components/planos/listaplanos/ListaPlanos";
import FormPlano from "./components/planos/formplano/FormPlano";
import DeletarPlano from "./components/planos/deletarplano/DeletarPlano";
import ListaSeguradoras from "./components/seguradoras/listaseguradoras/ListaSeguradoras";
import FormSeguradora from "./components/seguradoras/formseguradora/FormSeguradora";
import DeletarSeguradora from "./components/seguradoras/deletarseguradora/DeletarSeguradora";
import ListaPlanos1 from "./components/planos/listaplanos/ListaPlanos1";
import Perfil from "./pages/perfil/Perfil";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import Carro from "./pages/home/carro/Carro";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/carro" element={<Carro />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/planos" element={<ListaPlanos />} />
              <Route path="/cadastrarplano" element={<FormPlano />} />
              <Route path="/editarplano/:id" element={<FormPlano />} />
              <Route path="/deletarplano/:id" element={<DeletarPlano />} />
              <Route path="/seguradoras" element={<ListaSeguradoras />} />
              <Route path="/cadastrarseguradora" element={<FormSeguradora />} />
              <Route
                path="/editarseguradora/:id"
                element={<FormSeguradora />}
              />
              <Route
                path="/deletarseguradora/:id"
                element={<DeletarSeguradora />}
              />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/planos1" element={<ListaPlanos1 />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
