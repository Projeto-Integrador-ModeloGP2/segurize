function CarroPlanos() {
  return (
    <>
      <div className="bg-gradient-to-r from-green-300 to-blue-400 flex flex-col items-center">
        {/* bloco 1 */}
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          {/* Coluna de Texto */}
          <div className="text-left">
            <h1 className="text-2xl mt-10 mb-10">
              Bem-vindo à <strong className="text-blue-500">Segurize</strong>,
              sua especialista em proteção veicular.
            </h1>
            <p className="mb-4">
              Preencha os campos à direita para começar a proteger seu veículo
              com os melhores planos de seguro.
            </p>
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
                className="border-2 border-slate-700 rounded p-2 "
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
                className="border-2 border-slate-700 rounded p-2"
              />
            </div>

            {/* Termos e Condições */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="termos"
                className="border-2 border-slate-700 rounded"
              />
              <label htmlFor="termos" className="mb-2">
                Aceito os{" "}
                <a href="/termos" className="text-blue-500">
                  termos e condições
                </a>
              </label>
            </div>

            {/* Botão de Enviar */}
            <div className="mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Enviar
              </button>
            </div>
          </div>
        </div>

        {/* bloco 2 */}
        <div className="container grid grid-cols-4 items-center text-white gap-8 p-1">
          <div className="text-left">
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-blue-500">Segurize</span> Soluções em
              Seguros{" "}
            </h1>
            <h3 className="text-4xl font-bold mb-6">
              A melhor proteção veicular do Brasil
            </h3>
            <p className="text-2xl mb-4">
              Bem-vindo à <strong className="text-blue-500">Segurize</strong>,
              sua especialista em proteção veicular.
            </p>
            <p className="text-2xl mb-4">
              Trabalhamos com as seguradoras mais confiáveis do mercado para
              garantir a segurança do que realmente importa para você.
            </p>
            <p className="text-2xl mb-4">
              Escolha abaixo entre carro ou moto e clique na imagem para
              conferir os planos disponíveis.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="veiculos/strada.png"
              alt="Imagem Página Home"
              className="w-full scale-100 rounded-4xl"
            />
          </div>

          <div className="flex justify-center">
            <img
              src="veiculos/onixazul.png"
              alt="Imagem Página Home"
              className="w-full scale-110 rounded-4xl"
            />
          </div>

          <div className="flex justify-center">
            <img
              src="veiculos/polo.png"
              alt="Imagem Página Home"
              className="w-full scale-140 rounded-4xl"
            />
          </div>
        </div>
        {/* bloco 3 */}
        <div className="container grid grid-cols-2 items-center text-white gap-8 p-1">
          <div className="text-left">
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-blue-500">Segurize</span> Soluções em
              Seguros
            </h1>
            <h3 className="text-4xl font-bold mb-6">
              A melhor proteção veicular do Brasil
            </h3>
            <p className="text-2xl mb-4">
              Bem-vindo à <strong className="text-blue-500">Segurize</strong>,
              sua especialista em proteção veicular.
            </p>
            <p className="text-2xl mb-4">
              Trabalhamos com as seguradoras mais confiáveis do mercado para
              garantir a segurança do que realmente importa para você.
            </p>
            <p className="text-2xl mb-4">
              Escolha abaixo entre carro ou moto e clique na imagem para
              conferir os planos disponíveis.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="veiculos/onixazul.png"
              alt="Imagem Página Home"
              className="w-full scale-80 rounded-4xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CarroPlanos;
