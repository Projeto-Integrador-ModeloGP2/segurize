import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const { usuario } = useContext(AuthContext);

  if (usuario?.token) {
    return null; // Se o usuário estiver logado, não renderiza a Navbar
  }

  return (
    <div className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-black flex justify-center py-4">
      <div className="container flex justify-between text-lg">
        <Link to="/subhome" className="text-2xl font-bold hover:scale-105 text-blue-500">
          Segurize
        </Link>
        <div className="flex gap-4">
          <Link to="/planos" className="font-bold hover:scale-105">
            Planos
          </Link>
          <Link to="/login" className="font-bold hover:scale-105">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
