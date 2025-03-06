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
    <div className="w-full bg-[#00003C] text-white flex justify-center py-4 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
      <div className="container flex justify-between text-lg">
        <Link to="/home" className="text-2xl font-bold hover:scale-105">
          <img src="/logo4.svg" alt="Segurize" className="h-10 w-auto" />
        </Link>

        <div className="flex gap-4">
          {/* Links visíveis apenas para "messi@messi" */}
          {usuario.usuario === "adm@adm.com" && (
            <>
              
              <Link
                to="/cadastrarseguradora"
                className="font-medium hover:scale-105"
              >
                Adm Cadastrar Seguradora
              </Link>
              <div>
            |
          </div>
              <Link
                to="/cadastrarplano"
                className="font-medium hover:scale-105"
              >
                Adm Cadastrar Plano
              </Link>

              <div>
            |
          </div>

              <Link to="/seguradoras" className="font-medium hover:scale-105">
                Adm Editar Seguradoras
              </Link>

              <div>
            |
          </div>

              <Link to="/planosadm" className="font-medium hover:scale-105">
                Adm Editar Planos
              </Link>

              <div>
            |
          </div>
            </>
          )}
          {usuario.usuario !== "adm@adm.com" && (
            <>
            <Link to="/planos" className="font-medium hover:scale-105">
              Planos
            </Link>
            <div>
            |
          </div>
          </>
          )}
          <Link to="/perfil" className="font-medium hover:scale-105">
            Perfil
          </Link>
          <div>
            |
          </div>
          {usuario.usuario !== "messi@messi.com" && (
            <>
            <Link to="/sobrenos" className="font-medium hover:scale-105">
              Sobre Nós
            </Link>
            <div>
            |
          </div>
          </>
          )}
          <Link to="" onClick={logout} className="font-medium hover:scale-105">
            Sair
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
