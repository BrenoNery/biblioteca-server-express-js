import {Livro} from "./Livro";

class Editora {
    private _id: number;
    private _nome: string;
    private _endereco: string;
    private _livros: Livro[];

    constructor(id: number, nome: string, endereco: string, livros: Livro[]) {
        this._id = id;
        this._nome = nome;
        this._endereco = endereco;
        this._livros = livros;
    }

    set id(value: number) {
        this._id = value;
    }

    get id(): number {
        return this._id;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get nome(): string {
        return this._nome;
    }

    set endereco(value: string) {
        this._endereco = value;
    }

    get endereco(): string {
        return this._endereco;
    }

    set livros(value: Livro[]) {
        this._livros = value;
    }

    get livros(): Livro[] {
        return this._livros;
    }
} export{Editora}