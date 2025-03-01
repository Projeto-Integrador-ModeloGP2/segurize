import { Link } from 'react-router-dom';
import Plano from '../../../models/Plano';

interface CardPlanoProps {
    plano: Plano;
}

function CardPlano1({ plano }: CardPlanoProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    <h3 className='text-lg font-bold text-center uppercase flex-1/2'>
                        {plano.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{plano.nome}</h4>
                    <p>{plano.descricao}</p>
                    <p>Valor: {plano.valor}</p>
                    <p>Vigência: {plano.vigencia}</p>
                    <p>Franquia: {plano.franquia}</p>
                    <p>Status: {plano.status ? 'Ativo' : 'Inativo'}</p>
                    <p>Seguradora: {plano.seguradora?.nome}</p>
                    <p>Usuário: {plano.usuario?.nome}</p>
                </div>
            </div>
            <div className="flex">
            <Link to={`/editarplano/${plano.id}`}
	className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
    flex items-center justify-center py-2'>
	<button>Editar</button>
</Link>
<Link to={`/deletarplano/${plano.id}`} 
	className='text-white bg-red-400 
	hover:bg-red-700 w-full flex items-center justify-center'>
	<button>Deletar</button>
</Link>
            </div>
        </div>
    );
}

export default CardPlano1;
