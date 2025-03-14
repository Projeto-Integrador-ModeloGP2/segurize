/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Plano from "../../../models/Plano";
import Seguradora from "../../../models/Seguradora";
import Usuario from "../../../models/Usuario";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { ThreeDots } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormPlano() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Estados para seguradoras (já existentes)
  const [seguradoras, setSeguradoras] = useState<Seguradora[]>([]);
  const [seguradora, setSeguradora] = useState<Seguradora>({
    id: 0,
    nome: "",
    especialidade: "",
  });

  // Estados para usuários
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuarioPlano, setUsuarioPlano] = useState<Usuario>({} as Usuario);

  const [plano, setPlano] = useState<Plano>({} as Plano);

  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  // Função para buscar o plano pelo id (já existente)
  async function buscarPlanoPorId(id: string) {
    try {
      await buscar(`/planos/${id}`, setPlano, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  // Função para buscar a seguradora pelo id (já existente)
  async function buscarSeguradoraPorId(id: string) {
    try {
      await buscar(`/seguradoras/${id}`, setSeguradora, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  // Função para buscar a lista de seguradoras (já existente)
  async function buscarSeguradoras() {
    try {
      await buscar("/seguradoras", setSeguradoras, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  // Nova função: Buscar a lista de usuários
  async function buscarUsuarios() {
    try {
      await buscar("/usuarios/all", setUsuarios, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  // Nova função: Buscar usuário pelo id e atualizá-lo no estado usuarioPlano
  async function buscarUsuarioPorId(id: string) {
    try {
      await buscar(`/usuarios/${id}`, setUsuarioPlano, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao buscar o usuário", "erro");
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token]);

  // Chama as funções de busca de seguradoras e usuários na montagem do componente.
  useEffect(() => {
    buscarSeguradoras();
    buscarUsuarios();

    if (id !== undefined) {
      buscarPlanoPorId(id);
    }
  }, [id]);

  // Quando a seguradora ou o usuário selecionado mudar, atualiza o plano
  useEffect(() => {
    setPlano((prevPlano: Plano) => ({
      ...prevPlano,
      seguradora: seguradora,
      usuario: usuarioPlano, // Vincula o usuário selecionado
    }));
  }, [seguradora, usuarioPlano]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setPlano({
      ...plano,
      [e.target.name]: e.target.value,
      seguradora: seguradora,
      usuario: usuarioPlano,
    });
  }

  function retornar() {
    navigate("/planosadm");
  }

  async function gerarNovoPlano(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/planos`, plano, setPlano, {
          headers: { Authorization: token },
        });
        ToastAlerta("Plano atualizado com sucesso!", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar o Plano", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/planos`, plano, setPlano, {
          headers: { Authorization: token },
        });
        ToastAlerta("Plano cadastrado com sucesso!", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao cadastrar o Plano", "erro");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  function alternarStatus() {
    setPlano({ ...plano, status: !plano.status });
  }

  return (
    <div className="container flex flex-col mx-auto pt-30 items-center">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Plano" : "Cadastrar Plano"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoPlano}>
        {/* Campos para os dados do plano */}
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

        {/* Dropdown para Seguradoras */}
        <div className="flex flex-col gap-2">
          <p>Seguradora do Plano</p>
          <select
            name="seguradora"
            id="seguradora"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarSeguradoraPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma Seguradora
            </option>
            {seguradoras.map((seg) => (
              <option key={seg.id} value={seg.id}>
                {seg.nome}
              </option>
            ))}
          </select>
        </div>

        {/* Novo Dropdown para Usuários */}
        <div className="flex flex-col gap-2">
          <p>Usuário do Plano</p>
          <select
            name="usuario"
            id="usuario"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarUsuarioPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione um Usuário
            </option>
            {usuarios.map((usu) => (
              <option key={usu.id} value={usu.id}>
                {usu.nome}
              </option>
            ))}
          </select>
        </div>

        {/* Switch de Status */}
        <div className="flex items-center gap-2 mt-3">
          <span>Status do Plano:</span>
          <label className="inline-flex items-center cursor-pointer">
            <span
              className={`mr-2 ${
                plano.status ? "text-gray-500" : "text-red-600"
              }`}
            >
              Inativo
            </span>
            <input
              type="checkbox"
              className="sr-only peer"
              checked={plano.status}
              onChange={alternarStatus}
            />
            <div
              className="relative w-11 h-6 bg-red-500 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300
               peer-checked:bg-green-500
               after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white
               after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all
               peer-checked:after:translate-x-full peer-checked:after:border-white"
            ></div>
            <span
              className={`ml-2 ${
                plano.status ? "text-green-600" : "text-gray-500"
              }`}
            >
              Ativo
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="rounded bg-[#0A0A3C] hover:bg-blue-900 text-white font-bold w-1/2 mx-auto py-2 mt-8 mb-15 flex justify-center"
          disabled={seguradora.nome === ""}
        >
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
            </div>
          ) : (
            <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormPlano;
