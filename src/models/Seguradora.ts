import Plano from "./Plano";


export default interface Seguradora{
    id: number;
    nome: string;
    especialidade: string;
    plano?: Plano[] | null;
}