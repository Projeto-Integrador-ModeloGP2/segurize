/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Plano from "../../../models/Plano";
import { buscar } from "../../../services/Service";
import { ThreeDots } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardPlanosUsuario from "../cardplanos/CardPlanosUsuario";

function ListaPlanosUsuario() {
  const navigate = useNavigate();
  const [planos, setPlanos] = useState<Plano[]>([]); // Lista de planos
  const [faixaPreco, setFaixaPreco] = useState<number>(500); // Faixa de preço máximo
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  // Função para buscar planos da API
  async function buscarPlanos() {
    try {
      await buscar(
        "/planos",
        (result: Plano[]) => {
          setPlanos(result); // Recebe todos os planos e filtra no frontend
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    buscarPlanos(); // Busca planos ao carregar o componente
  }, []); // Chama apenas uma vez ao montar o componente

  // Função para remover 'R$' e vírgulas e converter para número
  const formatarValor = (valor: string): number => {
    return Number(valor.replace("R$", "").replace(",", "."));
  };

  // Filtra os planos com base na faixa de preço
  const planosFiltrados = planos.filter(
    (plano) => formatarValor(plano.valor) <= faixaPreco
  );

  // Função para lidar com a mudança da faixa de preço
  const handlePrecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFaixaPreco(Number(event.target.value));
  };

  // Função para formatar valores com vírgula (ex: R$ 1.000,00)
  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  return (
    <div className="flex justify-center w-full my-4 bg-[#E3F2FD]">
      <div className="container flex gap-4 mx-2">
        {/* Coluna Esquerda - Cards */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Filtro de preço com slider */}
          <div className="flex flex-col gap-4 mb-4">
            <label>Filtrar por preço (Máximo)</label>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span>{formatarMoeda(0)}</span>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="10"
                  value={faixaPreco}
                  onChange={handlePrecoChange}
                  className="w-full"
                />
                <span>{formatarMoeda(faixaPreco)}</span>
              </div>
            </div>
          </div>

          {/* Carregando planos ou exibição */}
          {planosFiltrados.length === 0 && (
            <DNA
              visible={true}
              height="200"
              width="200"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper mx-auto"
            />
          )}

          {/* Exibição dos planos filtrados com cards */}
          <div className="flex flex-col gap-4 mt-4">
            {planosFiltrados.map((plano) => (
              <CardPlanosUsuario key={plano.id} plano={plano} />
            ))}
          </div>
        </div>

        {/* Coluna Direita - Parágrafo e Imagem */}
        <div className="flex-1 flex flex-col justify-center items-center p-4">
          <h2 className="text-xl font-semibold mb-4">Seja bem-vindo!</h2>
          <p className="text-lg mb-4">
            Aqui você pode encontrar planos que atendem suas necessidades,
            filtrados pelo seu preço máximo.
          </p>
          <img
            src="veiculos/hb20.png"
            alt="Imagem exemplo"
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
}

export default ListaPlanosUsuario;
