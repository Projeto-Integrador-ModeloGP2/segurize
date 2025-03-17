/* eslint-disable @typescript-eslint/no-explicit-any */
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
      nome: "BMW",
      modelos: [
        "F 750 GS", "F 800 GS", "F 900 R", "F 900 XR", "G 310 GS", "G 310 R",
        "K 1300 S", "K 1600 B", "K 1600 GTL", "R 1200 GS", "R 1200 RT", "R 1250 GSA",
        "R 1250 GS", "R 1250 RT", "R 1250 RS", "S 1000 RR", "S 1000 XR", "S 1000 R", 
        "S 1000 RR M Sport", "S 1000 XR"
      ]
    },
    {
      id: 2,
      nome: "Ducati",
      modelos: [
        "Diavel 1200", "Diavel 1260", "Hypermotard 950", "Monster 1200", "Monster 821",
        "Multistrada 1200", "Multistrada 950", "Multistrada 1200 Enduro", "Panigale V2", 
        "Panigale V4", "Panigale V4 S", "Panigale V4 R", "Scrambler 800", "Scrambler Icon", 
        "Scrambler Desert Sled", "Streetfighter V4", "Streetfighter V4 S", "Supersport 950", 
        "XDiavel", "XDiavel S", "Monster 797"
      ]
    },
    {
      id: 3,
      nome: "Harley-Davidson",
      modelos: [
        "Breakout 114", "Deluxe", "Electra Glide", "Fat Boy", "Fat Boy 114", "Heritage Classic",
        "Iron 883", "Livewire", "Low Rider", "Pan America 1250", "Road Glide", "Road King",
        "Sport Glide", "Sportster S", "Street 750", "Street Bob", "Street 500", "Ultra Limited", 
        "Fat Bob", "Low Rider S"
      ]
    },
    {
      id: 4,
      nome: "Honda",
      modelos: [
        "Africa Twin", "Biz 110i", "CB 250F", "CB 300R", "CB 500", "CB 500F", "CB 500X", "CB 650F", 
        "CB 1000R", "CBR 1000RR", "CBR 1000RR-R Fireblade", "CBR 250R", "CBR 650R", "CG 160", 
        "CRF 230F", "CRF 250", "Hornet 600", "NC 750X", "NXR 160", "XRE 190", "XRE 300", 
        "CBR 650F", "XRE 190", "CBR 500R", "Hornet 600", "CBR 1000RR", "CBR 250R"
      ]
    },
    {
      id: 5,
      nome: "Kawasaki",
      modelos: [
        "KLR 650", "Ninja 1000", "Ninja 300", "Ninja 400", "Ninja H2", "Ninja ZX-6R", "Ninja ZX-10R", 
        "Vulcan 500", "Vulcan S", "Z1000", "Z300", "Z650", "Z800", "Z900", "Versys 1000", "Versys 650", 
        "Vulcan 900", "Z1000", "Z125 Pro", "Versys X 300"
      ]
    },
    {
      id: 6,
      nome: "KTM",
      modelos: [
        "1290 Super Duke R", "250 Adventure", "390 Adventure", "390 Duke", "Duke 125", "Duke 200", 
        "Duke 250", "Duke 690", "RC 200", "RC 390", "RC 8C", "Super Adventure 890", "SX-F 250", 
        "SX-F 450", "Super Adventure S", "250 EXC", "Super Duke 890", "Duke 990", "SX 450", 
        "Super Adventure 1290"
      ]
    },
    {
      id: 7,
      nome: "Suzuki",
      modelos: [
        "Bandit 1200", "Boulevard M800", "DL 1000 V-Strom", "DL 650 V-Strom", "GSX 1250F", "GSX 750",
        "GSX-R1000", "GSX-R600", "GSX-R750", "GSX-S1000", "GSX-S750", "Intruder 125", "Inazuma 250", 
        "SV 650", "V-Strom 650", "V-Strom 1000", "V-Strom 650 XT", "RM-Z 450", "V-Strom 250", 
        "GSX-S150", "V-Strom 1000"
      ]
    },
    {
      id: 8,
      nome: "Triumph",
      modelos: [
        "Bonneville T100", "Bonneville T120", "Bonneville Speedmaster", "Daytona 675", "Rocket 3", 
        "Rocket 3 R", "Rocket 3 GT", "Scrambler 1200", "Speed Triple", "Speed Twin", "Street Bob", 
        "Street Scrambler", "Street Triple", "Street Triple RS", "Thruxton RS", "Tiger 1200", 
        "Tiger 800", "Tiger Sport 660", "Street Twin", "Tiger 800 XCa"
      ]
    },
    {
      id: 9,
      nome: "Yamaha",
      modelos: [
        "Fazer 150", "Fazer 250", "Fazer 600", "MT-03", "MT-07", "MT-09", "MT-10", "NMAX 160", 
        "R1", "R3", "R6", "R7", "R15", "Ténéré 250", "Ténéré 700", "XJ6", "XSR 700", "YZF-R1", 
        "YZF-R6", "YZF-R3", "YZF-R15", "FZ6", "FZ25", "XMax 300", "FZ 25"
      ]
    }
  ];
  

  const navigate = useNavigate();

  // Filtrar os modelos com base na marca selecionada
  const modelosDisponiveis =
    marcas.find((m) => m.nome === marca)?.modelos || [];

  const handleMarcaChange = (e: any) => {
    setMarca(e.target.value);
    setModelo(""); // Limpar o modelo ao trocar de marca
    setOutroMarca(""); // Limpar marca "Outro"
  };

  const handleModeloChange = (e: any) => {
    setModelo(e.target.value);
    setOutroModelo(""); // Limpar modelo "Outro"
  };

  const handleChange = (e: any) => {
    setAnoFabricacao(e.target.value);
  };

  const handleSubmit = (e: any) => {
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
    navigate("/subhome");
  };

  return (
    <div className="bg-gradient-to-b from-[#AEE2FF] to-[#DCE4FF] flex flex-col items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mt-15">
        {/* Coluna de Texto */}
        <div className="text-left text-[#0A0A3C] gap-8 ">
          <h1 className="text-4xl mt-10 mb-10 font-bold">
            <span className="text-[#0000FF]">Segurize</span> Soluções em Seguros
          </h1>
          <p className="text-2xl mb-4">
            Preencha os campos à direita para começar a proteger sua moto com os
            melhores planos de seguro.
          </p>
          <p className="text-2x1 mb-4">
            A <span className="text-[#0000FF]">Segurize</span> é especializada
            em oferecer as melhores soluções em proteção veicular, com planos
            que atendem a diferentes necessidades e orçamentos. Garantimos a
            você tranquilidade e segurança, com cobertura ampla e suporte
            dedicado para qualquer situação.
          </p>
          <p className="text-2x1 mb-4">
            Não importa o tipo de veículo que você possui, nossos planos são
            flexíveis e podem ser ajustados para oferecer a melhor proteção para
            motos e outros. Com a{" "}
            <span className="text-[#0000FF]">Segurize</span>, você tem a certeza
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

      <div className="container text-[#0A0A3C] text-left m-15">
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
