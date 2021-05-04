import { Telefone } from "./telefone";

export class Usuario {
    id: number;
    login: string;
    nome: string;
    senha: string;
    cep: string;
    dataNascimento: string;
    telefones: Array<Telefone>
}
