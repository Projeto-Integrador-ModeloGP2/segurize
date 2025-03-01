/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Seguradora from "../../../models/Seguradora";
import CardSeguradoras from "../cardseguradoras/CardSeguradoras";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaSeguradoras() {

    const navigate = useNavigate();

    const [seguradoras, setSeguradoras] = useState<Seguradora[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarSeguradoras() {
        try {
            await buscar('/seguradoras', setSeguradoras, {
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
        buscarSeguradoras()    
    }, [seguradoras.length])
    
    return (
        <>
        {seguradoras.length === 0 && (
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
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {seguradoras.map((seguradora) => (
                            <CardSeguradoras key={seguradora.id} seguradora={seguradora} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaSeguradoras;
