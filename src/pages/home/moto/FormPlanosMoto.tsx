import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormPlanosMotos() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [outroModelo, setOutroModelo] = useState("");
  const [outroMarca, setOutroMarca] = useState("");
  const [anoFabricacao, setAnoFabricacao] = useState(2025);
  const [termosAceitos, setTermosAceitos] = useState(false);

  // Dados das marcas e modelos de motos
  const marcas = [
    {
      id: 1,
      nome: "Honda",
      modelos: ["CB 500", "CRF 250", "NXR 160", "CG 160"],
    },
    { id: 2, nome: "Yamaha", modelos: ["Fazer 250", "MT-03", "R1", "XT 660"] },
    {
      id: 3,
      nome: "Suzuki",
      modelos: ["GSX 750", "DL 1000 V-Strom", "Intruder 125", "Bandit 1200"],
    },
    {
      id: 4,
      nome: "Kawasaki",
      modelos: ["Ninja 400", "Z900", "Versys 650", "Vulcan S"],
    },
    { id: 5, nome: "BMW", modelos: ["G 310 R", "F 750 GS", "R 1250 GS"] },
    {
      id: 6,
      nome: "Ducati",
      modelos: ["Monster 821", "Panigale V2", "Scrambler 800"],
    },
    {
      id: 7,
      nome: "Harley-Davidson",
      modelos: ["Sportster S", "Street Bob", "Fat Boy"],
    },
    { id: 8, nome: "KTM", modelos: ["Duke 200", "390 Adventure", "RC 390"] },
    { id: 9, nome: "Honda", modelos: ["Hornet 600", "NC 750X", "CBR 1000RR"] },
    {
      id: 10,
      nome: "Triumph",
      modelos: ["Bonneville T100", "Street Triple", "Tiger 800"],
    },
    // Adicione outras marcas conforme necessário
  ];

  const navigate = useNavigate();

  // Filtrar os modelos com base na marca selecionada
  const modelosDisponiveis =
    marcas.find((m) => m.nome === marca)?.modelos || [];

  const handleMarcaChange = (e) => {
    setMarca(e.target.value);
    setModelo(""); // Limpar o modelo ao trocar de marca
    setOutroMarca(""); // Limpar marca "Outro"
  };

  const handleModeloChange = (e) => {
    setModelo(e.target.value);
    setOutroModelo(""); // Limpar modelo "Outro"
  };

  const handleChange = (e) => {
    setAnoFabricacao(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se todos os campos necessários estão preenchidos
    if (!marca || !modelo || !anoFabricacao) {
      ToastAlerta("Por favor, preencha todos os campos.", "info");
      return;
    }

    // Verifica se os termos e condições foram aceitos
    if (!termosAceitos) {
      ToastAlerta("Você precisa aceitar os termos e condições!", "info");
      return;
    }

    ToastAlerta(
      "Recebemos os seus dados e logo enviaremos os melhores opções para o seu perfil.",
      "sucesso"
    );

    // Redireciona para a página "/carro"
    navigate("/carro");
  };

  return (
    <div className="bg-gradient-to-r from-green-300 to-blue-400 flex flex-col items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mt-15">
        {/* Coluna de Texto */}
        <div className="text-left text-white gap-8 ">
          <h1 className="text-4xl mt-10 mb-10 font-bold">
            <span className="text-blue-800">Segurize</span> Soluções em Seguros
          </h1>
          <p className="text-2xl mb-4">
            Preencha os campos à direita para começar a proteger sua moto com os
            melhores planos de seguro.
          </p>
          <p className="text-2x1 mb-4">
            A <span className="text-blue-800">Segurize</span> é especializada em
            oferecer as melhores soluções em proteção veicular, com planos que
            atendem a diferentes necessidades e orçamentos. Garantimos a você
            tranquilidade e segurança, com cobertura ampla e suporte dedicado
            para qualquer situação.
          </p>
          <p className="text-2x1 mb-4">
            Não importa o tipo de veículo que você possui, nossos planos são
            flexíveis e podem ser ajustados para oferecer a melhor proteção para
            motos e outros. Com a{" "}
            <span className="text-blue-800">Segurize</span>, você tem a certeza
            de que sua moto estará protegida contra imprevistos, oferecendo
            assistência 24 horas e cobertura em caso de acidentes, roubo ou
            danos.
          </p>
          <p className="text-2x1 mb-4">
            Além disso, nossos processos são rápidos e simples, e você pode
            contratar o seguro de forma totalmente online. Não perca tempo,
            preencha o formulário ao lado e comece a proteger seu patrimônio
            hoje mesmo!
          </p>
          <img src="veiculos/twister.png" alt="Imagem de moto" />
        </div>

        {/* Coluna de Formulário */}
        <div className="flex flex-col gap-4">
          {/* Nome Completo */}
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              placeholder="Digite o nome"
              name="nome"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          {/* Data de Nascimento */}
          <div className="flex flex-col gap-2">
            <label htmlFor="data-nascimento" className="mb-2">
              Data de Nascimento
            </label>
            <input
              type="date"
              name="data-nascimento"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          {/* CPF */}
          <div className="flex flex-col gap-2">
            <label htmlFor="cpf" className="mb-2">
              CPF
            </label>
            <input
              type="text"
              placeholder="Digite o CPF"
              name="cpf"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          {/* Telefone */}
          <div className="flex flex-col gap-2">
            <label htmlFor="telefone" className="mb-2">
              Telefone
            </label>
            <input
              type="text"
              placeholder="Digite o telefone"
              name="telefone"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          {/* E-mail */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="mb-2">
              E-mail
            </label>
            <input
              type="email"
              placeholder="Digite o e-mail"
              name="email"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          {/* Sexo */}
          <div className="flex flex-col gap-2">
            <label htmlFor="sexo" className="mb-2">
              Sexo
            </label>
            <select
              name="sexo"
              className="border-2 border-slate-700 rounded p-2"
            >
              <option value="">Selecione...</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          {/* Endereço */}
          <div className="flex flex-col gap-2">
            <label htmlFor="endereco" className="mb-2">
              Endereço
            </label>
            <input
              type="text"
              placeholder="Digite o endereço"
              name="endereco"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          {/* Número da Placa da Moto */}
          <div className="flex flex-col gap-2">
            <label htmlFor="placa" className="mb-2">
              Número da Placa da Moto
            </label>
            <input
              type="text"
              placeholder="Digite a placa da moto"
              name="placa"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          {/* Ano de Fabricação da Moto */}
          <div className="flex flex-col gap-2">
            <label htmlFor="ano-fabricacao" className="mb-2">
              Ano de Fabricação
            </label>
            <input
              type="number"
              placeholder="Digite o ano de fabricação"
              name="ano-fabricacao"
              value={anoFabricacao}
              onChange={handleChange}
              min="1950"
              max="2025"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          {/* Marca do Veículo */}
          <div className="flex flex-col gap-2">
            <label htmlFor="marca" className="mb-2">
              Marca do Veículo
            </label>
            <select
              name="marca"
              value={marca}
              onChange={handleMarcaChange}
              className="border-2 border-slate-700 rounded p-2"
            >
              <option value="">Selecione a Marca</option>
              {marcas.map((marca) => (
                <option key={marca.id} value={marca.nome}>
                  {marca.nome}
                </option>
              ))}
              <option value="outro">Outro</option>
            </select>
            {marca === "outro" && (
              <input
                type="text"
                placeholder="Digite o nome da marca"
                value={outroMarca}
                onChange={(e) => setOutroMarca(e.target.value)}
                className="border-2 border-slate-700 rounded p-2 mt-2"
              />
            )}
          </div>

          {/* Modelo do Veículo */}
          <div className="flex flex-col gap-2">
            <label htmlFor="modelo" className="mb-2">
              Modelo do Veículo
            </label>
            <select
              name="modelo"
              value={modelo}
              onChange={handleModeloChange}
              disabled={!marca} // Desabilitar até uma marca ser selecionada
              className="border-2 border-slate-700 rounded p-2"
            >
              <option value="">Selecione o Modelo</option>
              {modelosDisponiveis.map((modelo, index) => (
                <option key={index} value={modelo}>
                  {modelo}
                </option>
              ))}
              {marca !== "outro" && <option value="outro">Outro</option>}
            </select>
            {(marca === "outro" || modelo === "outro") && (
              <input
                type="text"
                placeholder="Digite o nome do modelo"
                value={outroModelo}
                onChange={(e) => setOutroModelo(e.target.value)}
                className="border-2 border-slate-700 rounded p-2 mt-2"
              />
            )}
          </div>

          {/* Termos e Condições */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="termos"
              className="border-2 border-slate-700 rounded"
              onChange={(e) => setTermosAceitos(e.target.checked)} // Atualiza o estado
            />
            <label htmlFor="termos" className="mb-2">
              Aceito os{" "}
              <a href="/termos" className="text-blue-500">
                termos e condições
              </a>
            </label>
          </div>

          {/* Botão de Enviar */}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </div>
      </div>

      {/* nosso contato */}

      <div className="container text-white text-left m-15">
        <h2 className="text-4xl font-bold mb-6">Fale Conosco</h2>
        <p className="text-2xl mb-4">Nossos principais contatos estão aqui:</p>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Atendimento e Televendas</h3>
          <p className="text-2xl">0800 123 4567</p>
          <p className="text-lg">Das 8h às 18h, de 2ª a 6ª</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">E-mail</h3>
          <p className="text-2xl">falecom@segurize.com.br</p>
        </div>
      </div>
    </div>
  );
}

export default FormPlanosMotos;
