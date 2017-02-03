"use strict";
var Autor = (function () {
    function Autor(id, nome, sobrenome, dataNascimento) {
        this._id = id;
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._dataNascimento = dataNascimento;
    }
    Object.defineProperty(Autor.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Autor.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Autor.prototype, "sobrenome", {
        get: function () {
            return this._sobrenome;
        },
        set: function (value) {
            this._sobrenome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Autor.prototype, "dataNascimento", {
        get: function () {
            return this._dataNascimento;
        },
        set: function (value) {
            this._dataNascimento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Autor.prototype, "livro", {
        get: function () {
            return this._livro;
        },
        set: function (value) {
            this._livro = value;
        },
        enumerable: true,
        configurable: true
    });
    return Autor;
}());
exports.Autor = Autor;
//# sourceMappingURL=Autor.js.map