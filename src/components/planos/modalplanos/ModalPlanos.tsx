import 'reactjs-popup/dist/index.css';
import FormPlano from '../formplano/FormPlano';
import Popup from 'reactjs-popup';


function ModalPlano() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Novo Plano
                    </button>
                }
                modal
            >
                <FormPlano />
            </Popup>
        </>
    );
}

export default ModalPlano;