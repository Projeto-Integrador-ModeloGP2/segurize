import { useState } from "react";

function Teste() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [outroModelo, setOutroModelo] = useState("");
  const [outroMarca, setOutroMarca] = useState("");
  const [anoFabricacao, setAnoFabricacao] = useState(2025);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [dadosEnviados, setDadosEnviados] = useState(null);

  const marcas = [
    { id: 1, nome: "Honda", modelos: ["CB 500", "CRF 250", "NXR 160", "CG 160"] },
    { id: 2, nome: "Yamaha", modelos: ["Fazer 250", "MT-03", "R1", "XT 660"] },
    { id: 3, nome: "Suzuki", modelos: ["GSX 750", "DL 1000 V-Strom", "Intruder 125", "Bandit 1200"] },
    { id: 4, nome: "Kawasaki", modelos: ["Ninja 400", "Z900", "Versys 650", "Vulcan S"] },
  ];

  const modelosDisponiveis = marcas.find((m) => m.nome === marca)?.modelos || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    setDadosEnviados({
      nome,
      cpf,
      telefone,
      email,
      marca: marca === "outro" ? outroMarca : marca,
      modelo: modelo === "outro" ? outroModelo : modelo,
      anoFabricacao
    });
  };

  return (
    <div className="bg-gradient-to-r from-green-300 to-blue-400 flex flex-col items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        <div className="text-left text-white">
          <h1 className="text-4xl mt-10 mb-10 font-bold">
            <span className="text-blue-500">Segurize</span> Soluções em Seguros
          </h1>
          <p className="text-2xl mb-4">
            Preencha os campos para proteger sua moto com os melhores planos.
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} className="border p-2 rounded" required />
          <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} className="border p-2 rounded" required />
          <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="border p-2 rounded" required />
          <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" required />
          
          <select value={marca} onChange={(e) => setMarca(e.target.value)} className="border p-2 rounded">
            <option value="">Selecione a Marca</option>
            {marcas.map((marca) => (
              <option key={marca.id} value={marca.nome}>{marca.nome}</option>
            ))}
            <option value="outro">Outro</option>
          </select>
          
          {marca === "outro" && (
            <input type="text" placeholder="Digite a marca" value={outroMarca} onChange={(e) => setOutroMarca(e.target.value)} className="border p-2 rounded" />
          )}

          <select value={modelo} onChange={(e) => setModelo(e.target.value)} className="border p-2 rounded">
            <option value="">Selecione o Modelo</option>
            {modelosDisponiveis.map((mod) => (
              <option key={mod} value={mod}>{mod}</option>
            ))}
            <option value="outro">Outro</option>
          </select>

          {modelo === "outro" && (
            <input type="text" placeholder="Digite o modelo" value={outroModelo} onChange={(e) => setOutroModelo(e.target.value)} className="border p-2 rounded" />
          )}

          <input type="number" placeholder="Ano de Fabricação" value={anoFabricacao} onChange={(e) => setAnoFabricacao(e.target.value)} min="1950" max="2025" className="border p-2 rounded" required />

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar</button>
        </form>

        {/* Exibição dos dados enviados */}
        {dadosEnviados && (
          <div className="mt-4 bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">Dados Enviados:</h2>
            <p><strong>Nome:</strong> {dadosEnviados.nome}</p>
            <p><strong>CPF:</strong> {dadosEnviados.cpf}</p>
            <p><strong>Telefone:</strong> {dadosEnviados.telefone}</p>
            <p><strong>E-mail:</strong> {dadosEnviados.email}</p>
            <p><strong>Marca:</strong> {dadosEnviados.marca}</p>
            <p><strong>Modelo:</strong> {dadosEnviados.modelo}</p>
            <p><strong>Ano de Fabricação:</strong> {dadosEnviados.anoFabricacao}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Teste;
