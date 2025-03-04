import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Carro from "./pages/carro/Carro";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/home/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import FormPlano from "./components/planos/formplano/FormPlano";
import DeletarPlano from "./components/planos/deletarplano/DeletarPlano";
import FormSeguradora from "./components/seguradoras/formseguradora/FormSeguradora";
import DeletarSeguradora from "./components/seguradoras/deletarseguradora/DeletarSeguradora";
import ListaPlanos1 from "./components/planos/listaplanos/ListaPlanos1";
import Perfil from "./pages/perfil/Perfil";
import CardSobreNos from "./pages/SobreNos/CardSobreNos";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import SeguradoraPages from "./pages/seguradoras/SeguradorasPage";


function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Carro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastrarplano" element={<FormPlano />} />
              <Route path="/editarplano/:id" element={<FormPlano />} />
              <Route path="/deletarplano/:id" element={<DeletarPlano />} />
              <Route path="/cadastrarseguradora" element={<FormSeguradora />} />
              <Route path="/seguradoras" element={<SeguradoraPages />} />
              <Route
                path="/editarseguradora/:id"
                element={<FormSeguradora />}
              />
              <Route
                path="/deletarseguradora/:id"
                element={<DeletarSeguradora />}
              />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/planos" element={<ListaPlanos1 />} />
              <Route path="/sobrenos" element={<CardSobreNos />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
