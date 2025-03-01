/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Plano from "../../../models/Plano";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormPlano() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const { id } = useParams<{ id: string }>();

    const [plano, setPlano] = useState<Plano>({
        id: 0,
        nome: "",
        descricao: "",
        valor: "",
        vigencia: "",
        franquia: "",
        status: true, // Padrão: ativo
        seguradora: null
    });

    const [seguradoras, setSeguradoras] = useState<any[]>([]); // Para preencher o dropdown
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function buscarPorId(id: string) {
        try {
            await buscar(`/planos/${id}`, setPlano, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes("403")) {
                handleLogout();
            }
        }
    }

    async function carregarSeguradoras() {
        try {
            await buscar("/seguradoras", setSeguradoras, {
                headers: { Authorization: token }
            });
        } catch (error) {
            console.error("Erro ao buscar seguradoras", error);
        }
    }

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado!");
            navigate("/");
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
        carregarSeguradoras();
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setPlano((prevPlano) => {
            if (name === 'seguradora') {
                // Encontrar a seguradora selecionada na lista de seguradoras
                const seguradoraSelecionada = seguradoras.find((seg) => seg.id === parseInt(value));
                return { ...prevPlano, [name]: seguradoraSelecionada || null };
            }
            return { ...prevPlano, [name]: value };
        });
    }

    function alternarStatus() {
        setPlano({ ...plano, status: !plano.status });
    }

    function retornar() {
        navigate("/planos");
    }

    async function gerarNovoPlano(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                await atualizar(`/planos`, plano, setPlano, {
                    headers: { Authorization: token }
                });
                alert("O Plano foi atualizado com sucesso!");
            } else {
                await cadastrar(`/planos`, plano, setPlano, {
                    headers: { Authorization: token }
                });
                alert("O Plano foi cadastrado com sucesso!");
            }
        } catch (error: any) {
            if (error.toString().includes("403")) {
                handleLogout();
            } else {
                alert("Erro ao salvar o plano.");
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? "Cadastrar Plano" : "Editar Plano"}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoPlano}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Plano</label>
                    <input
                        type="text"
                        placeholder="Digite o nome do plano"
                        name="nome"
                        className="border-2 border-slate-700 rounded p-2"
                        value={plano.nome}
                        onChange={atualizarEstado}
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        type="text"
                        placeholder="Descreva o plano"
                        name="descricao"
                        className="border-2 border-slate-700 rounded p-2"
                        value={plano.descricao}
                        onChange={atualizarEstado}
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="valor">Valor (R$)</label>
                    <input
                        type="text"
                        placeholder="Digite o valor"
                        name="valor"
                        className="border-2 border-slate-700 rounded p-2"
                        value={plano.valor}
                        onChange={atualizarEstado}
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="vigencia">Vigência</label>
                    <input
                        type="text"
                        placeholder="Informe a vigência"
                        name="vigencia"
                        className="border-2 border-slate-700 rounded p-2"
                        value={plano.vigencia}
                        onChange={atualizarEstado}
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="franquia">Franquia</label>
                    <input
                        type="text"
                        placeholder="Digite a franquia"
                        name="franquia"
                        className="border-2 border-slate-700 rounded p-2"
                        value={plano.franquia}
                        onChange={atualizarEstado}
                        required
                    />
                </div>

                {/* Switch de Status */}
                <div className="flex items-center gap-2">
                    <span>Status do Plano:</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={plano.status}
                            onChange={alternarStatus} 
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full 
                        peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white 
                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                    </label>
                </div>

                {/* Dropdown de Seguradora */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="seguradora">Seguradora</label>
                    <select
                        name="seguradora"
                        className="border-2 border-slate-700 rounded p-2"
                        value={plano.seguradora ? plano.seguradora.id : ""}
                        onChange={atualizarEstado}
                        required
                    >
                        <option value="" disabled>Selecione uma seguradora</option>
                        {seguradoras.map((seg) => (
                            <option key={seg.id} value={seg.id}>{seg.nome}</option>
                        ))}
                    </select>
                </div>

                <button
                    className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
                >
                    {isLoading ? (
                        <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
                    ) : (
                        <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormPlano;
