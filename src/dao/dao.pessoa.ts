/**
 * Como agora "Pessoa" é um módulo, preciso importar aqui devido a configuração "outDir do "tsconfig.json"
 */
import { Pessoa } from "../modules/Pessoa";

class DAOPessoa {

    pessoas: Pessoa[] = [];

    constructor(pessoa: Pessoa[]) {
        this.pessoas = pessoa;
    }

    incluir( novaPessoa: Pessoa ) {
        this.pessoas.push( novaPessoa );
    }

    alterar(pessoa: Pessoa) {
        let res = this.pessoas.find(
            ( el: Pessoa ) => {
              return pessoa.nome === el.nome;
            }
         );
         res.nome = pessoa.nome;
       //  res.sobrenome = pessoa.sobrenome;
    }

    consultarPorID(id: number): Pessoa {
        return this.pessoas.find(
            (item) => { return item.id === id; }
        );
    }

    consultarTodas(): Pessoa[] {
        return this.pessoas;
    }

    excluir() {
        this.pessoas.pop();
    }
} export{DAOPessoa}
/**
 * O "export" transforma a classe "DAOPessoa" em um módulo.
 */