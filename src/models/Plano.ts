/* eslint-disable @typescript-eslint/no-empty-object-type */

import Seguradora from "./Seguradora";
import Usuario from "./Usuario";


export default interface Plano {
  id: number;
  nome: string;
  descricao: string;
  valor: string;
  vigencia: string;
  franquia: string;
  status?: boolean;
  seguradora: Seguradora | null;
  usuario: Usuario | null;
}