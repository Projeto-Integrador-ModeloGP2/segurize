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
    navigate("/home");
  }

  if (!usuario?.token) {
    return null; // Se o usuário não estiver logado, não renderiza a Navbar
  }

  return (
    <div className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-gray-200 flex justify-center py-4">
      <div className="container flex justify-between text-lg">
        <Link
          to="/home"
          className="text-2xl font-bold hover:scale-105 text-blue-800"
        >
          Segurize
        </Link>

        <div className="flex gap-4">
          {/* Links visíveis apenas para "messi@messi" */}
          {usuario.usuario === "messi@messi.com" && (
            <>
              <Link to="/seguradoras" className="font-bold hover:scale-105">
                Adm Editar Seguradoras
              </Link>
              <Link
                to="/cadastrarseguradora"
                className="font-bold hover:scale-105"
              >
                Adm Cadastrar Seguradora
              </Link>
              <Link to="/cadastrarplano" className="font-bold hover:scale-105">
                Adm Cadastrar Plano
              </Link>

              <Link to="/planosadm" className="font-bold hover:scale-105">
                Adm Editar Planos
              </Link>
            </>
          )}
          <Link to="/planos" className="font-bold hover:scale-105">
            Planos
          </Link>
          <Link to="/perfil" className="font-bold hover:scale-105">
            Perfil
          </Link>
          <Link to="/sobrenos" className="font-bold hover:scale-105">
            Sobre Nós
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
