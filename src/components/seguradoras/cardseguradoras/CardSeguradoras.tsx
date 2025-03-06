import { useState } from "react";
import { Link } from "react-router-dom";
import Seguradora from "../../../models/Seguradora";
import CardPlanos from "../../planos/cardplanos/CardPlanos";

interface CardSeguradoraProps {
  seguradora: Seguradora;
}

function CardSeguradoras({ seguradora }: CardSeguradoraProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center my-4">
      <div className="border flex flex-col rounded-2xl overflow-hidden w-80">
        {/* Header com o título */}
        <header className="py-2 px-6 bg-gradient-to-r from-green-300 to-blue-400 text-white font-bold text-2xl text-center">
          <h1>{seguradora.nome}</h1>
        </header>

        {/* Especialidade da seguradora */}
        <p className="p-4 text-xl bg-white">
          <strong>Especialidade:</strong> {seguradora.especialidade}
        </p>

        {/* Botão de Mostrar/Esconder Detalhes */}
        <button
          onClick={toggleCard}
          className="flex items-center justify-center text-blue-500 mt-2 hover:text-blue-700 mx-auto"
        >
          <span className="mr-2">
            {isOpen ? "Esconder Planos" : "Mostrar Planos"}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 transform ${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-transform duration-300`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Conteúdo que será mostrado/ocultado */}
        {isOpen && (
          <div className="p-4 text-gray-700">
            {/* Adicione aqui as informações adicionais que deseja mostrar ao expandir o card */}
            <p>
              <strong>Planos:</strong>
              {seguradora.plano?.map((plano) => (
                <CardPlanos key={"card-" + plano.id} plano={plano} />
              ))}
            </p>

            {/* Outros detalhes */}
          </div>
        )}
        {/* Botões de editar e deletar */}
        <div className="flex items-center justify-end px-4">
          <Link
            to={`/editarseguradora/${seguradora.id}`}
            className="w-10 h-10 rounded-full bg-cyan-400 hover:bg-cyan-800  
              flex items-center justify-center m-1"
          >
            <img src="/icons/editar.png" alt="editar" className="w-5 h-5" />
          </Link>

          <Link
            to={`/deletarseguradora/${seguradora.id}`}
            className="w-10 h-10 rounded-full bg-red-400 hover:bg-red-700
              flex items-center justify-center m-1"
          >
            <img src="/icons/deletar.png" alt="deletar" className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardSeguradoras;
