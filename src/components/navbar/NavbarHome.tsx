import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const { usuario } = useContext(AuthContext);

  if (usuario?.token) {
    return null; // Se o usuário estiver logado, não renderiza a Navbar
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-white/5 backdrop-blur-[2px] text-black flex justify-center py-4 shadow-lg z-50 border border-white/10">
      <div className="container flex justify-between text-lg">
        <Link
          to="/subhome"
          className="text-2xl font-bold hover:scale-105 text-blue-500"
        >
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
