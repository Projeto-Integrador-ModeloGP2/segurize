/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Seguradora from "../../../models/Seguradora"
import { buscar, deletar } from "../../../services/Service"
import { ThreeDots } from "react-loader-spinner"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarSeguradora() {

    const navigate = useNavigate()

    const [seguradora, setSeguradora] = useState<Seguradora>({} as Seguradora)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/seguradoras/${id}`, setSeguradora, {
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

    async function deletarSeguradora() {
        setIsLoading(true)

        try {
            await deletar(`/seguradoras/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlerta("Seguradora apagada com sucesso!", "sucesso")

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            } else {
                ToastAlerta("Erro ao deletar a seguradora.", "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/seguradoras")
    }
    
    return (
        <div className='container w-1/3 mx-auto '>
            <h1 className='text-4xl text-center my-4'>Deletar Seguradora</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a seguradora a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between bg-[#b1c8dd]'>
                <header 
                    className='py-2 px-6 bg-[#0A0A3C] text-white font-bold text-2xl text-center'>
                    {seguradora.nome}
                </header>
                <p className='p-8 text-3xl h-full'>{seguradora.especialidade}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-600 hover:bg-red-500 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-[#0A0A3C] hover:bg-blue-900
                                   flex items-center justify-center'
                                   onClick={deletarSeguradora}>
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
export default DeletarSeguradora
