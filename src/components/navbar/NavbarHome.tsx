import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const { usuario } = useContext(AuthContext);

  if (usuario?.token) {
    return null; // Se o usuário estiver logado, não renderiza a Navbar
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0A0A2A]/50 backdrop-blur-lg text-white flex justify-center py-4 shadow-lg z-50 border border-white/10">
      <div className="container flex justify-between text-lg">
        <Link
          to="/subhome"
          className="text-2xl font-bold hover:scale-105 text-blue-800"
        >
          <img src="/logo2.svg" alt="Segurize" className="h-10 w-auto" />
        </Link>
        <div className="flex gap-4">
<<<<<<< HEAD
          <Link
            to="/planos"
            className="font-bold hover:scale-105 text-[#1A1A1A]"
          >
            Planos
          </Link>
          <Link
            to="/login"
            className="font-bold hover:scale-105 text-[#333333]"
          >
=======
          <Link to="/login" className="font-bold hover:scale-105">
>>>>>>> e916a9f3554e6ec6a8c29005b8df1f93c3e82bf6
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
