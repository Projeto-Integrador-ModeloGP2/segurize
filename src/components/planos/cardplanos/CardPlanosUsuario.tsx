import Plano from "../../../models/Plano";

interface CardPlanoUsuarioProps {
  plano: Plano;
}

function CardPlanosUsuario({ plano }: CardPlanoUsuarioProps) {
  return (
    <div
      className="border-white/20 border 
            flex flex-col gap-4 rounded-xl overflow-hidden justify-between my-2 mt-10 bg-[#b1c8dd]
            "
    >
      <div>
        <div className="flex w-full bg-blue-400 py-2 px-4 items-center gap-4">
          <h3 className="text-lg font-bold text-center uppercase flex-1/2 text-gray-700">
            {plano.seguradora?.nome}
          </h3>
        </div>
        <div className="p-4 ">
          <h4 className="text-lg font-semibold uppercase">{plano.nome}</h4>
          <p>
            <b>Descrição: </b>
            {plano.descricao}
          </p>
          <p>
            <b>Valor: </b>
            {plano.valor}
          </p>
          <p>
            <b>Vigência: </b>
            {plano.vigencia}
          </p>
          <p>
            <b>Franquia: </b>
            {plano.franquia}
          </p>
          <p>
            <b>Status: </b>
            {plano.status ? "Ativo" : "Inativo"}
          </p>
          <p>
            <b>Seguradora: </b>
            {plano.seguradora?.nome}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardPlanosUsuario;
