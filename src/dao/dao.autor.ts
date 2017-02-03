import {Autor} from "../modules/Autor";

class DAOAutor {
    autores: Autor[];

    constructor(autores: Autor[]) {
        this.autores = autores;
    }

    incluir(autor: Autor) {
        this.autores.push(autor);
    }

    alterar(target: Autor) {
        this.autores.map(
            (v) => {
                if (v.id === target.id) {
                    v.nome = target.nome;
                    v.sobrenome = target.sobrenome;
                }
            }
        );
    }

    consultarPorID(id: number): Autor {
        return this.autores.find(
            (item) => { return item.id === id; }
        );
    }

    consultarTodas(): Autor[] {
        return this.autores;
    }

    excluir() {
        this.autores.pop();
    }
} export{DAOAutor}