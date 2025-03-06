function Home() {
    return (
        <>
            <div className="bg-[url('/image8c.png')] bg-cover bg-center flex justify-center pt-100">
            </div>

            <div className="container grid grid-cols-2 items-center text-[#0A0A3C] gap-8 p-10">
                {/* Coluna de texto à esquerda */}
                <div className="flex flex-col justify-start">
                    <h2 className="text-4xl text-center font-bold flex-1/6">

                        A melhor proteção veicular do Brasil!
                    </h2>
                    <p className="flex-1/2 text-xl text-center">
                        <p>
                            <br />
                            Bem-vindo ao Segurize, o seu intermediador de seguros para
                            veiculos.
                        </p>{" "}
                        <br />
                        <p>
                            Aqui oferecemos as melhores opções de seguros das mais
                            confiáveis empresas do mercado, para garantir a proteção do que é mais
                            importante para você.
                        </p>
                        <br />
                        <p>
                            Nossas seguradoras parceiras estão aqui para ajudá-los a aproveitar o melhor que seu veículo pode proporcionar,
                            com a segurança de se sentir cuidado em cada etapa da sua vida!
                        </p>
                        <br />
                    </p>
                </div>

                {/* Coluna de imagem à direita */}
                <div className="flex justify-end mt-18 my-18">
                    <img
                        src="/pneu.jpg"
                        alt="Imagem Página Home"
                        className="scale-160 w-full max-w-xs rounded-4xl rotate-z-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                    />
                </div>
            </div>



            <div className="container grid grid-cols-2 items-center text-[#0A0A3C] gap-8 p-10">
                {/* Coluna de imagem à esquerda */}
                <div className="flex justify-center mt-13 my-18">
                    <img
                        src="/mecanico.jpg"
                        alt="Imagem Página Home"
                        className="scale-160 w-full max-w-xs rounded-4xl rotate-z-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                    />
                </div> 

                {/* Coluna de texto à direita */}
                <div className="flex flex-col justify-start">
                    <h2 className="text-4xl text-center font-bold flex-1/6">
                        O atendimento ideal na hora que você mais precisa!
                    </h2>
                    
                        <br />
                        
                    <p className="flex-1/2 text-xl text-center">
                        Atendimento 24 horas em todo o território brasileiro.
                    </p>
                </div>
            </div>


        </>
    );
}

export default Home;
