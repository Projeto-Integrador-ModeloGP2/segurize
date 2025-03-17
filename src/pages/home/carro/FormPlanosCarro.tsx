/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { useNavigate } from "react-router-dom";

function FormPlanosCarro() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [outroModelo, setOutroModelo] = useState("");
  const [outroMarca, setOutroMarca] = useState("");
  const [anoFabricacao, setAnoFabricacao] = useState(2025);
  const [termosAceitos, setTermosAceitos] = useState(false);

  // Dados das marcas e modelos
  const marcas = [
    { id: 1, nome: "Aston Martin", modelos: ["DB11", "Vantage", "DBX"] },
    { id: 2, nome: "Audi", modelos: ["A3", "A4", "Q3", "Q5"] },
    { id: 3, nome: "Bentley", modelos: ["Continental", "Flying Spur", "Bentayga"] },
    { id: 4, nome: "BMW", modelos: ["Série 3", "Série 5", "X1", "X3"] },
    { id: 5, nome: "Chery", modelos: ["Tiggo 2", "Tiggo 5X", "Arrizo 5"] },
    { id: 6, nome: "Chevrolet", modelos: ["Agile", "Astra", "Aveo", "Aveo Sedan", "Blazer", "Blazer 4x4", "Blazer 2.8", "Bolt", 
    "Camaro", "Camaro SS", "Celta", "Chevette", "Cobalt", "Cobalt Elite", "Colorado", 
    "Colorado ZR2", "Corsa", "Corsa Classic", "Corsa Hatch", "Corsa Sedan", "Corsa Wagon", 
    "Cruze", "Cruze Sport6", "Diplomat", "FNR", "Impala", "Impala SS", "Kadett", "LUV", 
    "Malibu", "Malibu Hybrid", "Malibu Turbo", "Meriva", "Monza", "Monza Classic", "Montana", 
    "Montana Storm", "Opala", "Omega", "Onix", "Onix Plus", "Prisma", "S10", "S10 High Country", 
    "S10 Storm", "Sail", "Silverado", "Silverado 2500HD", "Silverado High Country", "Sonic", 
    "Spin", "Spin Activ", "Suburban", "Senda", "Tavera", "Tracker", "Tracker LT", "Tracker LTZ", 
    "Tracker Premier", "Tracker RS", "Trailblazer", "Trailblazer Premier", "Vectra", "Zafira"] },
    { id: 7, nome: "Chrysler", modelos: ["300C", "Grand Cherokee"] },
    { id: 8, nome: "Citroën", modelos: ["Aircross", "Berlingo", "BX", "C3", "C3 Aircross", "C3 Picasso", "C4", "C4 Cactus", 
      "C4 Picasso", "C5", "C6", "CX", "DS3", "DS4", "DS5", "Jumper", "Jumpy", "Relay", 
      "Saxo", "Xantia", "Xantia", "Xsara", "ZX"] },
    { id: 9, nome: "Ford", modelos: ["Crown Victoria", "Courier", "Corcel", "Del Rey", "EcoSport", "Edge", "Escort", "Expedition", 
    "Explorer", "F-100", "F-150", "F-150 King Ranch", "F-150 Lightning", "F-150 Raptor", "F-250", 
    "F-250 Lariat", "F-250 Super Duty", "F-3000", "F-350", "F-350 Raptor", "F-4000", "F-450", 
    "F-5000", "Fiesta", "Fiesta Sedan", "Figo", "Focus", "Focus RS", "Focus ST", "Focus Titanium", 
    "Fusion", "Fusion Hybrid", "Fusion ST", "Ka", "Ka Freestyle", "Ka Sedan", "Ka+", "Maverick", 
    "Mondeo", "Mustang", "Puma", "Ranger", "Ranger Raptor", "Territory", "Transit", "Taurus", "Verona"] },
    { id: 10, nome: "Fiat", modelos: ["500", "500L", "500X", "Argo", "Bravo", "Cinquecento", "Cronos", "Doblò", "Ducato", 
    "Elba", "Fiorino", "Freemont", "Grand Siena", "Idea", "Linea", "Marea", "Mobi", "Palio", 
    "Palio Weekend", "Panda", "Punto", "Regata", "Siena", "Strada", "Tempra", "Toro", 
    "Tipo", "Bravo", "Punto T-Jet", "Punto Abarth", "Siena EL", "Siena Tetra", "Marea Weekend", 
    "Fiorino Furgão", "Fiorino Cargo", "Stilo", "Fiat 147", "Fiat 500E", "Mobi Like", "Panda 4x4"] },
    { id: 11, nome: "Honda", modelos: ["Accord", "Accord Crosstour", "Civic", "Civic Si", "Civic Type R", "Civic Hatchback", 
    "City", "CR-V", "CR-Z", "Element", "Fit", "Insight", "HR-V", "HR-V Sport", "HR-V EX", 
    "HR-V Touring", "Jazz", "Odyssey", "Passport", "Pilot", "Pilot Elite", "Pilot Touring", 
    "Prelude", "Ridgeline", "StepWGN", "Z600", "WR-V", "Crossroad", "Civic Sedan", 
    "Civic Tourer", "CR-V Hybrid", "Element SC", "CR-V EX", "CR-V EX-L", "Fit EV", 
    "Civic Hybrid", "Odyssey Elite", "Civic GX", "HR-V RS", "HR-V EX-L", "Jazz Crosstar"] },
    { id: 12, nome: "Hyundai", modelos: ["HB20", "Creta", "Tucson", "Kona"] },
    { id: 13, nome: "Jaguar", modelos: ["XE", "XF", "F-Pace"] },
    { id: 14, nome: "Jeep", modelos: ["Compass", "Renegade", "Cherokee", "Gladiator"] },
    { id: 15, nome: "Kia", modelos: ["Seltos", "Sportage", "Cerato", "Picanto"] },
    { id: 16, nome: "Land Rover", modelos: ["Range Rover", "Discovery", "Evoque"] },
    { id: 17, nome: "Lamborghini", modelos: ["Huracán", "Urus", "Aventador"] },
    { id: 18, nome: "Lexus", modelos: ["RX", "NX", "IS"] },
    { id: 19, nome: "Maserati", modelos: ["Ghibli", "Levante", "Quattroporte"] },
    { id: 20, nome: "McLaren", modelos: ["720S", "570S", "P1"] },
    { id: 21, nome: "Mini", modelos: ["Cooper", "Countryman"] },
    { id: 22, nome: "Mercedes-Benz", modelos: ["Classe A", "Classe C", "GLA", "GLC"] },
    { id: 23, nome: "Mitsubishi", modelos: ["L200", "Outlander", "Pajero Sport"] },
    { id: 24, nome: "Nissan", modelos: [ "Altima", "Armada", "Frontier", "Kicks", "Leaf", "March", "Maxima", "Murano", 
      "Navara", "Pathfinder", "Rogue", "Sentra", "Skyline", "Titan", "Versa", "X-Trail", 
      "370Z", "Juke", "370Z Nismo", "Versa Note", "Rogue Sport", "Nissan GT-R", "Nissan Frontier PRO-4X"] },
    { id: 25, nome: "Peugeot", modelos: [ "2008", "2008 Allure", "2008 Active", "2008 Hybrid", "208", "208 Allure", "208 Black", 
      "208 GTI", "208 PureTech", "208 XR", "207", "206", "206 SW", "207 SW", "3008", 
      "3008 GT", "3008 Hybrid", "301", "308", "308 Allure", "308 CC", "308 GT", "308 S", 
      "308 SW", "308 XS", "4008", "406", "407", "408", "408 SW", "508", "508 GT", 
      "508 Hybrid", "5008", "5008 GT", "Partner", "Picasso", "RCZ", "Renault Koleos", 
      "SW"] },
    { id: 26, nome: "Porsche", modelos: ["911", "Cayenne", "Macan"] },
    { id: 27, nome: "Renault", modelos: ["Kwid", "Sandero", "Duster", "Captur"] },
    { id: 28, nome: "Rolls-Royce", modelos: ["Phantom", "Ghost", "Wraith"] },
    { id: 29, nome: "Tesla", modelos: ["Model S", "Model 3", "Model X", "Model Y"] },
    { id: 30, nome: "Toyota", modelos: ["Corolla", "Camry", "Hilux", "Yaris"] },
    { id: 31, nome: "Troller", modelos: ["T4"] },
    { id: 32, nome: "Volkswagen", modelos: ["Amarok", "Beetle", "Bora", "Caravelle", "CrossFox", "Dune", "Eos", "Fusca", "Fox", "Gol", 
      "Gol G4", "Gol G5", "Gol G6", "Gol G7", "Gol Special", "Gol Trendline", "Gol 1.0", "Gol 1.6", 
      "Gol 1.8", "Golf", "Golf Comfortline", "Golf Edition", "Golf GTD", "Golf GTI", "Golf GTE", "Golf Highline", 
      "Golf Plus", "Golf R", "Golf TDI", "Golf Variant", "Jetta", "Jetta Comfortline", "Jetta GLI", "Jetta Variant", 
      "Kombi", "Kombi Cargo", "Kombi Furgão", "Kombi Pickup", "Lupo", "Lupo GTI", "Nivus", "Nivus Comfortline", 
      "Nivus Highline", "Passat", "Passat CC", "Passat Variant", "Polo", "Polo Beats", "Polo Comfortline", "Polo GTI", 
      "Polo Highline", "Polo Trend", "Polo 1.0 TSI", "Saveiro", "Saveiro 1.6", "Saveiro Cross", "Saveiro Robust", 
      "Saveiro Trooper", "Scirocco", "Scirocco R", "SpaceFox", "T-Cross", "T-Cross 200 TSI", "T-Cross 250 TSI", 
      "Tiguan", "Tiguan Allspace", "Tiguan R-Line", "Touran", "Touran Highline", "Up", "Up! TSI", "Up! Xtreme", 
      "Voyage", "Voyage G6", "Voyage Trend"] }
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
            Preencha os campos à direita para começar a proteger seu veículo com
            os melhores planos de seguro.
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
            carros, motos e outros. Com a{" "}
            <span className="text-[#0000FF]">Segurize</span>, você tem a certeza
            de que seu veículo estará protegido contra imprevistos, oferecendo
            assistência 24 horas e cobertura em caso de acidentes, roubo ou
            danos.
          </p>
          <p className="text-2x1 mb-4">
            Além disso, nossos processos são rápidos e simples, e você pode
            contratar o seguro de forma totalmente online. Não perca tempo,
            preencha o formulário ao lado e comece a proteger seu patrimônio
            hoje mesmo!
          </p>
          <img src="veiculos/onixazul.png" alt="Imagem de veículo" />
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

          {/* Número da Placa do Veículo */}
          <div className="flex flex-col gap-2">
            <label htmlFor="placa" className="mb-2">
              Número da Placa do Veículo
            </label>
            <input
              type="text"
              placeholder="Digite a placa do veículo"
              name="placa"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          {/* Ano de Fabricação do Veículo */}
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

export default FormPlanosCarro;
