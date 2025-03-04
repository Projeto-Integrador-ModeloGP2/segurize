import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "sucesso");
    navigate("/");
  }

  return (
    <>
      <div className="w-full bg-gradient-to-r from-green-300 to-blue-400 text-black flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold hover:scale-105">
            Segurize
          </Link>

          <div className="flex gap-4">
            <Link to="/seguradoras" className="font-bold hover:scale-105">
              Seguradoras
            </Link>
            <Link to="/cadastrarseguradora" className="font-bold hover:scale-105">
              Cadastrar Seguradora
            </Link><q></q>
            <Link to="/planos" className="font-bold hover:scale-105">
              Planos
            </Link>
            <Link to="/cadastrarplano" className="font-bold hover:scale-105">
              Cadastrar Plano
            </Link>
            <Link to="/perfil" className="font-bold hover:scale-105">
              Perfil
            </Link>
            <Link to="/sobrenos" className="font-bold hover:scale-105">
              Sobre Nós
            </Link>
            <Link to="/login" className="font-bold hover:scale-105">
              Login
            </Link>
            <Link to="" onClick={logout} className="font-bold hover:scale-105">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;