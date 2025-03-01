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
      <div
        className="w-full bg-indigo-900 text-white
                flex justify-center py-4"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold">
            Segurize
          </Link>

          <div className="flex gap-4">
            <Link to="/seguradoras" className="hover:underline">
              Seguradoras
            </Link>
            <Link to="/cadastrarseguradora" className="hover:underline">
              Cadastrar Seguradora
            </Link>
            <Link to="/planos" className="hover:underline">
              Planos
            </Link>
            <Link to="/planos1" className="hover:underline">
              Planos1
            </Link>
            <Link to="/cadastrarplano" className="hover:underline">
              Cadastrar Plano
            </Link>
            <Link to="/perfil" className="hover:underline">
              Perfil
            </Link>
            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
