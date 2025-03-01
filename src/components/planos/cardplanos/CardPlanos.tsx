import { Link } from "react-router-dom";
import Plano from "../../../models/Plano";

interface CardPlanosProps {
  plano: Plano;
}

function CardPlanos({ plano }: CardPlanosProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl">
        {plano.nome}
      </header>
      <p className="p-2 text-1xl bg-white h-full">
        <strong>Descrição:</strong> {plano.descricao}
      </p>
      <p className="p-2 text-1xl bg-white h-full">
        <strong>Valor (R$):</strong> {plano.valor}
      </p>
      <p className="p-2 text-1xl bg-white h-full">
        <strong>Vigência:</strong> {plano.vigencia}
      </p>
      <p className="p-2 text-1xl bg-white h-full">
        <strong>Franquia (R$):</strong> {plano.franquia}
      </p>
      <p className="p-2 text-1xl bg-white h-full">
        <strong>Status:</strong> {plano.status ? "Ativo" : "Inativo"}
      </p>

      <div className="flex">
        <Link
          to={`/editarplano/${plano.id}`}
          className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
          flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>

        <Link
          to=""
          className="text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardPlanos;
