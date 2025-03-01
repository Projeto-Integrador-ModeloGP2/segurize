import { Link } from "react-router-dom";
import Seguradora from "../../../models/Seguradora";

interface CardSeguradorasProps {
  seguradora: Seguradora;
}

function CardSeguradoras({ seguradora }: CardSeguradorasProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl text-center">
        {seguradora.nome}
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">
        {seguradora.especialidade}
      </p>

      <div className="flex">
        <Link
          to={`/editarseguradora/${seguradora.id}`}
          className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
    flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarseguradora/${seguradora.id}`}
          className="text-slate-100 bg-red-400 hover:bg-red-700 w-full 
		flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardSeguradoras;
