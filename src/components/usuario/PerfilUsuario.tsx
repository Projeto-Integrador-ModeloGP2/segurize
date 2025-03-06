/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";
import CardUsuario from "./CardUsuario";
import Plano from "../../models/Plano";
 
function PerfilUsuario() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [planos, setPlanos] = useState<Plano[]>([]);
  const token = usuario.token;
 
  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/login");
    }
  }, [token]);
 
  useEffect(() => {
    async function buscarPlanos() {
      try {
        await buscar("/planos", (dados: Plano[]) => {
          const planosFiltrados = dados.filter(
            (plano) => plano.usuario?.id === usuario.id
          );
          setPlanos(planosFiltrados);
        }, {
          headers: {
            Authorization: token,
          },
        });
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        }
      }
    }
    buscarPlanos();
  }, [planos.length]);
 
  return (
    <div className="flex flex-col md:flex-row justify-center items-start mx-4 pt-10 pb-10 gap-8">
      {/* Coluna do Perfil */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end">
        <div className="container mx-auto rounded-2xl overflow-hidden flex flex-col items-center">
          <div
            className="w-full h-72 object-cover border-b-8 border-white"
          />
          <img
            className="rounded-full w-56 mt-[-8rem] border-8 border-white relative z-10"
            src={usuario.foto}
            alt={`Foto de perfil de ${usuario.nome}`}
          />
          <div className="relative mt-[-4rem] h-72 flex flex-col text-black text-2xl items-center justify-center">
            <p><b>Nome:</b> {usuario.nome}</p>
            <p><b>Email Cadastrado:</b> {usuario.usuario}</p>
          </div>
        </div>
      </div>
 
      {/* Coluna dos Planos */}
      <div className="w-full md:w-2/3 flex justify-center items-center">
        {planos.length === 0 ? (
          <div className="flex justify-center text-xl text-gray-500 items-center mt-60">
            <div className="border-2 border-gray-400 rounded-xl p-8 w-96 text-center">
              <p className="text-lg font-semibold">Usuário sem plano</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 w-full max-w-2xl">
            {planos.map((plano) => (
              <CardUsuario key={plano.id} plano={plano} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
 
export default PerfilUsuario;