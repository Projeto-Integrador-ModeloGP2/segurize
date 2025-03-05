import { Link } from "react-router-dom";
import Seguradora from "../../../models/Seguradora";
import CardPlanos from "../../planos/cardplanos/CardPlanos";

interface CardSeguradoraProps {
  seguradora: Seguradora;
}

function CardSeguradoras({ seguradora }: CardSeguradoraProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-gradient-to-r from-green-300 to-blue-400 text-white font-bold text-2xl text-center">
      <h1>Seguradora {seguradora.nome}</h1>
      </header>

      <p className="p-2 text-1xl bg-white h-full">
        <strong>Especialidade:</strong> {seguradora.especialidade}
      </p>
      <p className="p-2 text-1xl bg-white h-full">
        <strong>Planos:</strong> {seguradora.plano?.map(({id, nome, descricao}) => <CardPlanos key={"card-" + id} nome={nome} descricao={descricao}/>)}
      </p>
      

    </div>
  );
}

export default CardSeguradoras;
