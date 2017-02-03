"use strict";
var Editora = (function () {
    function Editora(id, nome, endereco, livros) {
        this._id = id;
        this._nome = nome;
        this._endereco = endereco;
        this._livros = livros;
    }
    Object.defineProperty(Editora.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Editora.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Editora.prototype, "endereco", {
        get: function () {
            return this._endereco;
        },
        set: function (value) {
            this._endereco = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Editora.prototype, "livros", {
        get: function () {
            return this._livros;
        },
        set: function (value) {
            this._livros = value;
        },
        enumerable: true,
        configurable: true
    });
    return Editora;
}());
exports.Editora = Editora;
//# sourceMappingURL=Editora.js.map