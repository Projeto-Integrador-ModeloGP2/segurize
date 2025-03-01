function Home() {
  return (
    <>
      <div className="bg-indigo-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-4xl font-bold flex-1/6">
              A melhor proteção veicular do Brasil
            </h2>
            <p className="flex-1/2 text-xl text-center">
              <p>
                Bem-vindo ao Segurize, o seu intermediador de seguros para
                veiculos.
              </p>{" "}
              <br />
              <p>
                Aqui oferecemos as melhores opções de seguros das empresas mais
                confiáveis do mercado, para garantir a proteção do que é mais
                importante para você.
              </p>
              <br />
              
            </p>

            <div className="flex justify-around gap-4">
              <div
                className="rounded text-white 
                                            border-white border-solid border-2 py-2 px-4"
              >
                Nova Postagem
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="public/carro.png"
              alt="Imagem Página Home"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
