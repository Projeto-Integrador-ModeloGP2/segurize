import { useState } from "react";
import Plano from "../../models/Plano";
 
interface CardPlanoProps {
  plano: Plano;
}
 
function CardUsuario({ plano }: CardPlanoProps) {
  const [isExpanded, setIsExpanded] = useState(false);
 
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
 
  return (
    <div className="mt-30 border-slate-900 border flex flex-col gap-4 rounded-xl overflow-hidden justify-between my-2">
      <div>
        <div className="flex w-full bg-gradient-to-r from-green-300 to-blue-400 py-2 px-4 items-center gap-4">
          <h3 className="text-lg font-bold text-center uppercase flex-1/2">{plano.nome}</h3>
        </div>
        <div className="p-4">
          <h4 className="text-lg font-semibold uppercase flex justify-between items-center">
            {plano.nome}
            <button onClick={handleToggle} className="text-xl">
              {isExpanded ? "−" : "+"} {/* Ícone de expandir/recolher */}
            </button>
          </h4>
          {isExpanded && (
            <div>
              <p><b>Descrição:</b> {plano.descricao}</p>
              <p><b>Valor:</b> {plano.valor}</p>
              <p><b>Vigência:</b> {plano.vigencia}</p>
              <p><b>Franquia:</b> {plano.franquia}</p>
              <p><b>Status:</b> {plano.status ? "Ativo" : "Inativo"}</p>
              <p><b>Seguradora:</b> {plano.seguradora?.nome}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
 
export default CardUsuario;