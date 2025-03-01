import { Link } from "react-router-dom";
import Plano from "../../../models/Plano";

interface CardPlanosProps {
  plano: Plano;
}

function CardPlanos({ plano }: CardPlanosProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <p className="p-2 text-2xl text-center bg-blue-200 h-full">
        <strong>Seguradora:</strong> {plano.seguradora ? plano.seguradora.nome : "Não informado"}
      </p>
      <p className="p-2 text-1xl bg-white h-full">
        <strong>Plano:</strong> {plano.nome}
      </p>
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

        <Link to={`/deletarplano/${plano.id}`} 
	className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
		flex items-center justify-center'>
	<button>Deletar</button>
</Link>
      </div>
    </div>
  );
}

export default CardPlanos;
