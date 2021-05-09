import { Profissao } from "./profissao";
import { Telefone } from "./telefone";

export class Usuario {
    id: number;
    login: string;
    nome: string;
    senha: string;
    cep: string;
    dataNascimento: string;
    salario: DoubleRange;
    telefones: Array<Telefone>;
    profissao: Profissao = new Profissao();
}
