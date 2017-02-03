class Pessoa {
    private _id: number;
    private _nome: string;
    private _sobrenome: string;
    private _telefone: string;

    constructor(id: number, nome: string, sobrenome: string, telefone: string) {
        this.id = id;
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._telefone = telefone;
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

    set telefone(value: string) {
        this._telefone = value;
    }

    get telefone(): string {
        return this._telefone;
    }
} export{Pessoa}
/**
 * O "export" transforma a classe "Pessoa" em um módulo.
 */