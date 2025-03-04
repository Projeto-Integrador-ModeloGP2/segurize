import { Link } from "react-router-dom";
import Seguradora from "../../../models/Seguradora";

interface CardSeguradoraProps {
  seguradora: Seguradora;
}

function CardSeguradoras({ seguradora }: CardSeguradoraProps) {
  return (
    <div className="">
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-gradient-to-r from-green-300 to-blue-400 text-white font-bold text-2xl text-center">
          <h1>Seguradora {seguradora.nome}</h1>
        </header>

        <p className="p-2 text-1xl bg-white h-full">
          <strong>Especialidade:</strong> {seguradora.especialidade}
        </p>

        <div className="flex items-end justify-end m-2">
          <Link
            to={`/editarseguradora/${seguradora.id}`}
            className="w-10 h-10 rounded-full bg-cyan-400 hover:bg-cyan-800  
          flex items-center justify-center py-2 m-1"
          >
            <button>
              <div className="w-5 h-5">
                <img src="/icons/editar.png" alt="editar" />
              </div>
            </button>
          </Link>

          <Link
            to={`/deletarseguradora/${seguradora.id}`}
            className="w-10 h-10 rounded-full bg-red-400 hover:bg-red-700
		flex items-center justify-center m-1"
          >
            <button>
              <div className="w-5 h-5">
                <img src="/icons/deletar.png" alt="deletar" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardSeguradoras;
