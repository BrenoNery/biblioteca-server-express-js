import {Editora} from "../modules/Editora";

class DAOEditora {
    editoras: Editora[];

    constructor(editoras: Editora[]) {
        this.editoras = editoras;
    }

    incluir(editora: Editora) {
        this.editoras.push(editora);
    }

    alterar(editora: Editora) {
        let res = this.editoras.find(
            ( el: Editora ) => {
              return editora.nome === el.nome;
            }
         );
         res.nome = editora.nome;
    }

    consultarPorID(id: number): Editora {
        return this.editoras.find(
            (item) => { return item.id === id; }
        );
    }

    consultarTodas(): Editora[] {
        return this.editoras;
    }

    excluir() {
        this.editoras.pop();
    }

} export{DAOEditora}