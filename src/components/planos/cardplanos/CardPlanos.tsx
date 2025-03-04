import { Link } from 'react-router-dom';
import Plano from '../../../models/Plano';

interface CardPlanoProps {
    plano: Plano;
}

function CardPlanos({ plano }: CardPlanoProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col gap-4 rounded-xl overflow-hidden justify-between my-2'>
                
            <div>
                <div className="flex w-full bg-gradient-to-r from-green-300 to-blue-400 py-2 px-4 items-center gap-4">
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
            
            <div className="flex items-end justify-end m-2">
            <Link to={`/editarplano/${plano.id}`}
	className='w-10 h-10 rounded-full bg-cyan-400 hover:bg-cyan-800 
    flex items-center justify-center py-2 m-1'>
	<button>
        <div className='w-5 h-5'>
        <img src="/icons/editar.png" alt="editar" /> 
        </div>
        </button>
</Link>
<Link to={`/deletarplano/${plano.id}`} 
	className=' bg-red-400 
	hover:bg-red-700 w-10 h-10 rounded-full flex items-center justify-center m-1'>
	<button> 
        <div className='w-5 h-5'>
        <img src="/icons/deletar.png" alt="deletar" /> 
        </div>
        </button>
</Link>
            </div>
        </div>
    );
}

export default CardPlanos;
