import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/home/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import FormPlano from "./components/planos/formplano/FormPlano";
import DeletarPlano from "./components/planos/deletarplano/DeletarPlano";
import FormSeguradora from "./components/seguradoras/formseguradora/FormSeguradora";
import DeletarSeguradora from "./components/seguradoras/deletarseguradora/DeletarSeguradora";

import CardSobreNos from "./pages/SobreNos/CardSobreNos";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import FormPlanosMoto from "./pages/home/moto/FormPlanosMoto";
import FormPlanosCarro from "./pages/home/carro/FormPlanosCarro";
import SubHome from "./pages/home/SubHome";
import NavbarHome from "./components/navbar/NavbarHome";

import SeguradoraPages from "./pages/seguradoras/SeguradorasPage";
import ListaPlanosAdm from "./components/planos/listaplanos/ListaPlanosAdm";
import ListaPlanosUsuario from "./components/planos/listaplanos/ListaPlanosUsuario";
import PerfilUsuario from "./components/usuario/PerfilUsuario";




function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <NavbarHome />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<SubHome />} />
              <Route path="/home" element={<Home />} />
              <Route path="/subhome" element={<SubHome />} /> 
              <Route path="/formplanoscarro" element={<FormPlanosCarro />} />
              <Route path="/formplanosmoto" element={<FormPlanosMoto />} />
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
              <Route path="/perfil" element={<PerfilUsuario />} />
              <Route path="/planosadm" element={<ListaPlanosAdm />} />
              <Route path="/sobrenos" element={<CardSobreNos />} />
              <Route path="/planos" element={<ListaPlanosUsuario />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
