/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import Plano from "../../models/Plano"; // Importando a model Plano

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlerta("Você precisa estar logado.", "info");
      navigate("/");
    }
  }, [usuario.token]);

  return (
    <div className="flex justify-center mx-4 pt-30 pb-30">
      <div className="container mx-auto my-4 rounded-2xl overflow-hidden">
        <img
          className="w-full h-72 object-cover border-b-8 border-white"
          src="https://i.imgur.com/ZZFAmzo.jpg"
          alt="Capa do Perfil"
        />

        <img
          className="rounded-4xl w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10"
          src={usuario.foto}
          alt={`Foto de perfil de ${usuario.nome}`}
        />

        <div className="relative mt-[-4rem] h-72 flex flex-col bg-sky-500 text-white text-2xl items-center justify-center">
          <p>Nome: {usuario.nome} </p>
          <p>Email: {usuario.usuario}</p>
          {/* Verificando se o usuário tem plano vinculado */}
          {usuario.plano ? (
            <div className="mt-4 bg-white text-sky-500 p-4 rounded-md">
              <h3 className="font-semibold text-xl">Plano Vinculado</h3>
              <p>
                <strong>Nome do Plano:</strong> {usuario.plano.nome}
              </p>
              <p>
                <strong>Descrição:</strong> {usuario.plano.descricao}
              </p>
              <p>
                <strong>Valor:</strong> {usuario.plano.valor}
              </p>
              <p>
                <strong>Vigência:</strong> {usuario.plano.vigencia}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {usuario.plano.status ? "Ativo" : "Inativo"}
              </p>
            </div>
          ) : (
            <p className="mt-4 text-white">
              Você não tem nenhum plano vinculado.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Perfil;
