import Card from "../../components/CardAlunos/index";

const alunosArr: Alunos[] = [
  {
    name: "Caroliny Caproni Martins de Araujo",
    frase: "Desenvolvedora Fullstack Júnior",
    email: "mailto:caroliny.caproni@hotmail.com",
    github: "https://github.com/CarolinyCaproni",
    linkedin: "https://www.linkedin.com/in/caroliny-caproni-martins-de-araujo/",
    foto: "/alunos/caroliny.jpg",
  },
  {
    name: "Jéssica Gomes Araujo Santos",
    frase: "Desenvolvedora Fullstack Júnior",
    email: "mailto:jessicagomesprocesso@gmail.com",
    linkedin: "https://www.linkedin.com/in/jessicagomesss/",
    github: "https://github.com/jessicagomess",
    foto: "/alunos/Jessica-2.jpg",
  },
  {
    name: "Maria Clara Barbosa",
    frase: "Desenvolvedora Fullstack Júnior",
    email: "mailto:mah201218@gmail.com",
    linkedin: "https://www.linkedin.com/in/clarabarbos4/",
    github: "https://github.com/clarabarbosa",
    foto: "/alunos/mariaclara.jpg",
  },
  {
    name: "Marcos Ogata Hamamoto Iyama",
    frase: "Desenvolvedor Fullstack Júnior",
    email: "mailto:marcosiyama@gmail.com",
    linkedin: "https://www.linkedin.com/in/marcos-iyama-1b232031b/",
    github: "https://github.com/MarcosIyama",
    foto: "/alunos/marcos.jpg",
  },
  {
    name: "Henrique da Silva de Andrade",
    frase: "Desenvolvedor Fullstack Júnior",
    email: "mailto:henriquesaa10@gmail.com",
    github: "https://github.com/HenriqueAndras1",
    linkedin: "https://www.linkedin.com/in/henriquesilvaaa/",
    foto: "/alunos/henrique.jpg",
  },
];

function CardSobreNos() {
  return (
    <div
      className="flex flex-wrap gap-4 justify-center pt-30 bg-[#E3F2FD] 
"
    >
      {alunosArr.map(({ name, frase, email, github, linkedin, foto }) => {
        return (
          <Card
            key={"card-" + name}
            name={name}
            frase={frase}
            email={email}
            github={github}
            linkedin={linkedin}
            foto={foto}
          />
        );
      })}
    </div>
  );
}

export default CardSobreNos;
