import { Link } from "react-router-dom";
import Plano from "../../../models/Plano";

interface CardPlanoProps {
  plano: Plano;
}

function CardPlanos({ plano }: CardPlanoProps) {
  return (
    <div
      className="mt-30 border-slate-900 border 
            flex flex-col gap-4 rounded-xl overflow-hidden justify-between my-2 bg-[#b1c8dd]"
    >
      <div>
        <div className="flex w-full bg-[#0A0A3C] text-white py-2 px-4 items-center gap-4">
          <h3 className="text-lg font-bold text-center uppercase flex-1/2">
            {plano.nome}
          </h3>
        </div>
        <div className="p-4 ">
          <p>
            <b>Descrição:</b> {plano.descricao}
          </p>
          <p>
            <b>Valor: </b>
            {plano.valor}
          </p>
          <p>
            <b>Vigência:</b> {plano.vigencia}
          </p>
          <p>
            <b>Franquia:</b> {plano.franquia}
          </p>
          <p>
            <b>Status:</b> {plano.status ? "Ativo" : "Inativo"}
          </p>
          <p>
            <b>Seguradora:</b> {plano.seguradora?.nome}
          </p>
          <p>
            {" "}
            <b>Usuário:</b> {plano.usuario?.nome}
          </p>
        </div>
      </div>

      <div className="flex items-end justify-end m-2">
        <Link
          to={`/editarplano/${plano.id}`}
          className="w-10 h-10 rounded-full bg-[#0A0A3C] hover:bg-blue-900 
    flex items-center justify-center py-2 m-1"
        >
          <button>
            <div className="w-5 h-5">
              <img src="/icons/editar.png" alt="editar" />
            </div>
          </button>
        </Link>
        <Link
          to={`/deletarplano/${plano.id}`}
          className=" bg-red-600 
	hover:bg-red-500 w-10 h-10 rounded-full flex items-center justify-center m-1"
        >
          <button>
            <div className="w-5 h-5">
              <img src="/icons/deletar.png" alt="deletar" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardPlanos;
