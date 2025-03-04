/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";

import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Plano from "../../../models/Plano";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CardPlano1 from "../cardplanos/CardPlanos";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaPlanos1() {

    const navigate = useNavigate();

    const [planos, setPlanos] = useState<Plano[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPlanos() {
        try {
            await buscar('/planos', setPlanos, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta("Você precisa estar logado!", "info")
            navigate('/');
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
                            <CardPlano1 key={plano.id} plano={plano} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaPlanos1;
