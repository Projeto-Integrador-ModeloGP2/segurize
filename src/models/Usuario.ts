import Plano from "./Plano";


export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  plano?: Plano[] | null;
}