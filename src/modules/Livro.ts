import {Editora} from "./Editora";
import {Autor} from "./Autor";

class Livro {
    constructor(public _id: number,
                public _titulo: string,
                public _autor: Autor,
                public _dataLancamento: string,
                public _editora: Editora,
                public _urlImagem: string) {
        this._id = _id;
        this._titulo = _titulo;
        this._autor = _autor;
        this._dataLancamento = _dataLancamento;
        this._editora = _editora;
        this._urlImagem = _urlImagem;
    }
} export{Livro}

/*
import {Editora} from "./Editora";
import {Autor} from "./Autor";

class Livro {
    private _id: number;
    private _titulo: string;
    private _dataLancamento: string;
    private _editora: Editora;
    private _autor: Autor;

    constructor(id: number, titulo: string, autor: Autor, _dataLancamento: string, editora: Editora) {
        this._id = id;
        this._titulo = titulo;
        this._autor = autor;
        this._dataLancamento;
        this._editora = editora;
    }

    set id(value: number) {
        this._id = value;
    }

    get id(): number {
        return this._id;
    }

    set titulo(value: string) {
        this._titulo = value;
    }

    get titulo() {
        return this._titulo;
    }

    set autor(value: Autor) {
        this._autor = value;
    }

    get autor() {
        return this._autor;
    }

    set dataLancamento(value: string) {
        this._dataLancamento = value;
    }

    get dataLancamento(): string {
        return this._dataLancamento;
    }

    set editora(value: Editora) {
        this._editora = value;
    }

    get editora(): Editora {
        return this._editora;
    }
} export{Livro}
*/