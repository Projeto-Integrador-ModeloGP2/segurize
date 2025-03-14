/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Seguradora from "../../../models/Seguradora";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormSeguradora() {
  const navigate = useNavigate();

  const [seguradora, setSeguradora] = useState<Seguradora>({} as Seguradora);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
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

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setSeguradora({
      ...seguradora,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/seguradoras");
  }

  async function gerarNovaSeguradora(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/seguradoras`, seguradora, setSeguradora, {
          headers: { Authorization: token },
        });
        ToastAlerta("A Seguradora foi atualizada com sucesso!", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar a seguradora.", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/seguradoras`, seguradora, setSeguradora, {
          headers: { Authorization: token },
        });
        ToastAlerta("A Seguradora foi cadastrada com sucesso!", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao cadastrar a seguradora.", "erro");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto pt-30 pb-30">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Seguradora" : "Editar Seguradora"}
      </h1>

      <form
        className="w-1/2 flex flex-col gap-4"
        onSubmit={gerarNovaSeguradora}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Preencha os dados da seguradora</label>
          <input
            type="text"
            placeholder="Digite o nome da seguradora"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={seguradora.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label htmlFor="descricao">Especialidade</label>
          <input
            type="text"
            placeholder="Exemplo: Carros Classicos"
            name="especialidade"
            className="border-2 border-slate-700 rounded p-2"
            value={seguradora.especialidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-[#0A0A3C] hover:bg-blue-900 
                               w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {isLoading ? (
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
          </div>
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormSeguradora;
