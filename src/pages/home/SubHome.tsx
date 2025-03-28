import { Link } from "react-router-dom";

function SubHome() {
  return (
    <>
      <div className="bg-[#ffffff]  flex flex-col items-center pt-30">
        {/* 1° Bloco */}

        <div className="container grid grid-cols-2 items-center text-[#0A0A3C] gap-8 p-1">
          <div className="text-left">
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-[#0000FF]">Segurize</span> Soluções em
              Seguros{" "}
            </h1>
            <h3 className="text-4xl font-bold mb-6">
              A melhor proteção veicular do Brasil
            </h3>
            <p className="text-2xl text-[#1E293B] mb-4">
              Bem-vindo à <strong className="text-blue-500">Segurize</strong>,
              sua especialista em proteção veicular.
            </p>
            <p className="text-2xl text-[#0A0A3C] mb-4">
              Trabalhamos com as seguradoras mais confiáveis do mercado para
              garantir a segurança do que realmente importa para você.
            </p>
            <p className="text-2xl text-[#0A0A3C] mb-4">
              Escolha abaixo entre carro ou moto e clique na imagem para
              conferir os planos disponíveis.
            </p>

            <p className="font-bold">
              Ainda não tem uma conta?{" "}
              <Link
                to="/cadastro"
                className="text-[#0000FF] hover:underline font-bold"
              >
                Cadastre-se
              </Link>
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/pessoas/capa.jpg"
              alt="Imagem Página Home"
              className="w-full scale-80 rounded-4xl rotate-z-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>

        {/* 2° Bloco - Veículos */}
        <div className="w-screen bg-[#F0F4FA] flex items-center justify-center">
  <div className="container grid grid-cols-2 items-center text-black gap-8 p-1">
    <div className="flex flex-col items-center justify-center">
      <span className="text-center text-lg font-semibold">Clique no carro e faça sua cotação</span>
      <Link to="/formplanoscarro">
        <img
          src="veiculos/creta.png"
          alt="Imagem Creta"
          className="w-full cursor-pointer hover:scale-110 transition-transform duration-300 p-1"
        />
      </Link>
    </div>

    <div className="flex flex-col items-center justify-center">
      <span className="text-center text-lg font-semibold mt-10">Clique na moto e faça sua cotação</span>
      <Link to="/formplanosmoto">
        <img
          src="veiculos/r3.png"
          alt="Imagem R3"
          className="w-full cursor-pointer scale-70 hover:scale-80 transition-transform duration-350"
        />
      </Link>
    </div>
  </div>
</div>


        {/* 3° Bloco  */}
        <div className="w-screen bg-[#00003C]">
          <div className="container grid grid-cols-2 items-center text-white gap-8 p-8">
            <div className="flex justify-center">
              <img
                src="pessoas/capa2.jpg"
                alt="Imagem Página Home"
                className="w-full scale-80 rounded-4xl rotate-z-358 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
              />
            </div>

            <div className="text-left">
              <h2 className="text-4xl text-[#ffff] font-bold mb-6">
                Por que escolher a{" "}
                <span className="text-[#0000FF]">Segurize</span>?
              </h2>

              <p className="text-2xl text-[#ffff] mb-4">
                Na Segurize, entendemos que seu veículo é mais do que um meio de
                transporte é parte essencial da sua vida. Por isso, atuamos como
                intermediadores das melhores seguradoras do mercado, oferecendo
                proteção confiável e acessível para carros e motos.
              </p>
              <p className="text-2xl text-[#ffff] mb-4">
                Nosso compromisso é garantir que você tenha tranquilidade ao
                dirigir, sabendo que seu patrimônio está seguro contra
                imprevistos. Trabalhamos com seguradoras reconhecidas,
                oferecendo planos personalizados que atendem às suas
                necessidades, desde coberturas básicas até planos completos com
                assistência 24 horas.
              </p>
              <p className="text-2xl text-[#ffff]">
                Com transparência, rapidez e suporte especializado, estamos
                prontos para ajudá-lo a encontrar a melhor solução de seguro,
                proporcionando segurança para você e sua família.
              </p>
            </div>
          </div>
        </div>
        {/* bloco 4 */}

        <div className="w-screen bg-[#F0F4FA] flex items-end justify-end">
          <div className="container grid grid-cols-2 items-center text-[#0A0A3C] gap-8 p-8">
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-[#0000FF]">Segurize</span> com tecnologia,
                rapidez e zero burocracia.
              </h2>
              <p className="text-2xl mb-4">
                Prevenção a poucos cliques de distância.
              </p>

              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/7139/7139883.png"
                  alt="Chave sendo inserida em um cadeado"
                  className="w-12 h-12"
                />
                <p className="text-2xl font-bold">Com proteção</p>
              </div>

              <p className="text-2xl mb-4">
                Tranquilidade e confiança pro seu dia a dia.
              </p>

              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/284/284128.png"
                  alt="Homem deitado em um pato inflável na água"
                  className="w-12 h-12"
                />
                <p className="text-2xl font-bold">Faça tudo online</p>
              </div>

              <p className="text-2xl mb-4">
                Contratar, acionar ou falar com a gente é muito fácil.
              </p>

              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2097/2097276.png"
                  alt="Mulher alterando as configurações de um sistema"
                  className="w-12 h-12"
                />
                <p className="text-2xl font-bold">Personalize</p>
              </div>

              <p className="text-2xl mb-4">
                Escolha o plano ou formato e pague um valor justo.
              </p>

              <div className="flex items-center gap-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1611/1611261.png"
                  alt="Coelho competindo em uma corrida com uma barra de carregamento"
                  className="w-12 h-12"
                />
                <p className="text-2xl font-bold">No seu tempo</p>
              </div>

              <p className="text-2xl mt-4">
                Agilidade e facilidade sem aqueles prazos enormes.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/pessoas/capa1.jpg"
                alt="Imagem Página Home"
                className="w-full scale-80 rounded-4xl rotate-z-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
        {/* 5° Bloco - Parceiros */}
        <div className="text-[#0A0A3C] text-center p-8">
          <h2 className="text-4xl font-bold mb-8">
            Confira os nossos parceiros
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <img className="w-28 h-20" src="logos/nexus.png" alt="Nexus" />
            <img className="w-28 h-24" src="logos/aurora.png" alt="Aurora" />
            <img className="w-28 h-24" src="logos/alpha.png" alt="Alpha" />
            <img
              className="w-28 h-24"
              src="logos/titanium.png"
              alt="Titanium"
            />
            <img className="w-36 h-20" src="logos/zenith.png" alt="Zenith" />
          </div>
        </div>
        {/* nosso contato */}
        <div className="w-screen bg-[#00003C] flex items-center justify-center">
          <div className="container text-[#ffff] text-center m-10">
            <h2 className="text-4xl font-bold mb-6">Fale Conosco</h2>
            <p className="text-2xl mb-4">
              Nossos principais contatos estão aqui:
            </p>

            <div className="mb-4">
              <h3 className="text-xl font-semibold">
                Atendimento e Televendas
              </h3>
              <p className="text-2xl">0800 123 4567</p>
              <p className="text-lg">Das 8h às 18h, de 2ª a 6ª</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">E-mail</h3>
              <p className="text-2xl">falecom@segurize.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubHome;
