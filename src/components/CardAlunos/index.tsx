import { GithubLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react";

type CardProps = Alunos;

export default function Card({
  name,
  frase,
  email,
  github,
  linkedin,
  foto,
}: CardProps) {
  return (
    <div
      className="border-white/20 border flex flex-col rounded-2xl
    overflow-hidden justify-between w-80 m-10 bg-[#b1c8dd]
    drop-shadow-[0_5px_15px_rgba(0,0,0,0.2)]
"
    >
      <div>
        <div className="flex w-full py-2 px-4 items-center gap-4 justify-center">
          <img
            src={foto}
            className="h-50 w-50 object-cover rounded-2xl"
            alt=""
          />
        </div>

        <div className="p-4">
          <strong className="flex itens-center justify-center">{name}</strong>
          <p className="flex itens-center justify-center text-gray-800">
            {frase}
          </p>

          <div
            className="justify-center flex m-5 flex-col
            "
          >
            <div className="flex ">
              <strong>Contato:</strong>
            </div>

            <div className="flex flex-row items-center justify-evenly">
              <a href={linkedin} target="_blank">
                <LinkedinLogo size={48} weight="regular" />
              </a>
              <a href={github} target="_blank">
                <GithubLogo size={48} weight="regular" />
              </a>
              <a href={email} target="_blank">
                <Envelope size={50} weight="regular" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
