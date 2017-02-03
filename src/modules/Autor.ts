import {Livro} from "./Livro";

class Autor {
    private _id: number;
    private _nome: string;
    private _sobrenome: string;
    private _dataNascimento: string;
    private _livro: Livro;

    constructor(id: number, nome: string, sobrenome: string, dataNascimento: string) {
        this._id = id;
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._dataNascimento = dataNascimento;
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

    set sobrenome(value: string) {
        this._sobrenome = value;
    }

    get sobrenome(): string {
        return this._sobrenome;
    }

    set dataNascimento(value: string) {
        this._dataNascimento = value;
    }

    get dataNascimento(): string {
        return this._dataNascimento;
    }

    set livro(value: Livro) {
        this._livro = value;
    }

    get livro(): Livro {
        return this._livro;
    }
} export{Autor}