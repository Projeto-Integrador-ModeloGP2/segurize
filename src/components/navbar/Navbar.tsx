import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "sucesso");
    navigate("/");
  }

  if (!usuario?.token) {
    return null; // Se o usuário não estiver logado, não renderiza a Navbar
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-white/5 backdrop-blur-[2px] text-black flex justify-center py-4 shadow-lg z-50 border border-white/10">
      <div className="container flex justify-between text-lg">
        <Link to="/home" className="text-2xl font-bold hover:scale-105">
          <img src="/logo3.svg" alt="Segurize" className="h-10 w-auto" />
        </Link>

        <div className="flex gap-4">
          <Link to="/seguradoras" className="font-bold hover:scale-105">
            Seguradoras
          </Link>
          <Link to="/cadastrarseguradora" className="font-bold hover:scale-105">
            Cadastrar Seguradora
          </Link>
          <Link to="/planos" className="font-bold hover:scale-105">
            Planos
          </Link>
          <Link to="/cadastrarplano" className="font-bold hover:scale-105">
            Cadastrar Plano
          </Link>
          <Link to="/sobrenos" className="font-bold hover:scale-105">
            Sobre Nós
          </Link>

          <Link to="/perfil" className="font-bold hover:scale-105">
            Perfil
          </Link>
          <Link to="" onClick={logout} className="font-bold hover:scale-105">
            Sair
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
