/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Plano from "../../../models/Plano"
import { buscar, deletar } from "../../../services/Service"
import { ThreeDots } from "react-loader-spinner"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarPlano() {

    const navigate = useNavigate()

    const [plano, setPlano] = useState<Plano>({} as Plano)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/planos/${id}`, setPlano, {
                headers: {
                    'Authorization': token
                }
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
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarPlano() {
        setIsLoading(true)

        try {
            await deletar(`/planos/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlerta("Plano apagado com sucesso!", "sucesso")

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                ToastAlerta("Erro ao deletar o plano.", "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/planos")
    }
    
    return (
        <div className='container w-1/3 mx-auto '>
            <h1 className='text-4xl text-center my-4'>Deletar plano</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o plano a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between bg-[#b1c8dd]'>
            <p className="p-2 text-2xl text-center bg-[#0A0A3C] text-white h-full">
        <strong>Seguradora</strong> {plano.seguradora ? plano.seguradora.nome : "Não informado"}
      </p>
      <p className="p-2 text-1xl h-full">
        <strong>Plano:</strong> {plano.nome}
      </p>
      <p className="p-2 text-1xl h-full">
        <strong>Descrição:</strong> {plano.descricao}
      </p>
      <p className="p-2 text-1xl h-full">
        <strong>Valor (R$):</strong> {plano.valor}
      </p>
      <p className="p-2 text-1xl h-full">
        <strong>Vigência:</strong> {plano.vigencia}
      </p>
      <p className="p-2 text-1xl h-full">
        <strong>Franquia (R$):</strong> {plano.franquia}
      </p>
      <p className="p-2 text-1xl h-full">
        <strong>Status:</strong> {plano.status ? "Ativo" : "Inativo"}
      </p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-600 hover:bg-red-500 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-[#0A0A3C] hover:bg-blue-900
                                   flex items-center justify-center'
                                   onClick={deletarPlano}>
                        {isLoading ?
                            <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center"
                            }}
                          >
                            <ThreeDots
                              visible={true}
                              height="40"
                              width="40"
                              color="#00003c"
                              radius="9"
                              ariaLabel="three-dots-loading"
                              wrapperStyle={{}}
                              wrapperClass=""
                            />
                          </div> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarPlano
