import {Livro} from "../modules/Livro";
import {Autor} from "../modules/Autor";
import {Editora} from "../modules/Editora";

class DAOLivro {
    livros: Livro[];

    constructor(livros: Livro[]) {
        this.livros = livros;
    }

    incluir(livro: Livro) {
        this.livros.push(livro);
    }

    alterar(livro: Livro) {
        let res = this.livros.find(
            ( el: Livro ) => {
              return livro._titulo === el._titulo;
            }
         );
         res._titulo = livro._titulo;
    }

    consultarPorID(id: number): Livro {
        return this.livros.find(
            (item) => { return item._id === id; }
        );
    }

    consultarAutorLivro(idLivro: number): Autor {
        let livro = this.consultarPorID(idLivro);
        return livro._autor;
    }

    consultarEditoraLivro(idLivro: number): Editora {
        let livro = this.consultarPorID(idLivro);
        return livro._editora;
    }

    consultarTodas(): Livro[] {
        return this.livros;
    }

    excluir() {
        this.livros.pop();
    }
} export{DAOLivro}