import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const { usuario } = useContext(AuthContext);

  if (usuario?.token) {
    return null; // Se o usuário estiver logado, não renderiza a Navbar
  }

  return (
    <div className="w-full bg-[#00003C] text-white flex justify-center py-4 shadow-lg ">
      <div className="container flex justify-between text-lg">
        <Link
          to="/subhome"
          className="text-2xl font-bold hover:scale-105 text-blue-800"
        >
          <img src="/logo4.svg" alt="Segurize" className="h-10 w-auto" />
        </Link>
        <div className="flex gap-4">
          <Link to="/login" className="font-bold hover:scale-105">
            Login
          </Link>
          <Link to="/sobrenos" className="font-bold hover:scale-105">
            Sobre Nós
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;