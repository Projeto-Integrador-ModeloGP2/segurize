/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Plano from "../../../models/Plano";
import CardPlanos from "../cardplanos/CardPlanos";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaPlanos() {

    const navigate = useNavigate();

    const [planos, setPlanos] = useState<Plano[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPlanos() {
        try {
            await buscar('/planos', setPlanos, {
                headers: { Authorization: token }
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
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarPlanos()    
    }, [planos.length])
    
    return (
        <>
        {planos.length === 0 && (
            <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
                       {planos.map((plano) => (
                            <CardPlanos key={plano.id} plano={plano} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaPlanos;
