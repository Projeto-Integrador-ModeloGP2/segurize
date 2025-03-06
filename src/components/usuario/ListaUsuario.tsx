/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
 
import { useState, useContext, useEffect } from "react";
import { buscar } from "../../services/Service";
import { AuthContext } from "../../contexts/AuthContext";
import Plano from "../../models/Plano";
import { ToastAlerta } from "../../utils/ToastAlerta";
import CardUsuario from "./CardUsuario";
import { DNA } from "react-loader-spinner";
 
 
function ListaUsuario() {
 
    const navigate = useNavigate();
 
    const [planos, setPlanos] = useState<Plano[]>([]);
 
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
 
   async function buscarPlanos() {
    try {
        await buscar('/planos', (dados: Plano[]) => {
            // Filtra os planos para exibir apenas os do usuário logado
            const planosFiltrados = dados.filter(plano => plano.usuario?.id === usuario.id);
            setPlanos(planosFiltrados);
        }, {
            headers: {
                Authorization: token,
            },
        });
    } catch (error: any) {
        if (error.toString().includes('403')) {
            handleLogout();
        }
    }
}
 
 
    useEffect(() => {
        if (token === '') {
            ToastAlerta("Você precisa estar logado!", "info")
            navigate('/login');
        }
    }, [token])
 
    useEffect(() => {
        buscarPlanos()
    }, [planos.length])
 
    return (
        <>
            {planos.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">
                    <div className='container mx-auto my-4
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                    >
                        {planos.map((plano) => (
                            <CardUsuario key={plano.id} plano={plano} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ListaUsuario;