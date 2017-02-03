"use strict";
var Pessoa = (function () {
    function Pessoa(id, nome, sobrenome, telefone) {
        this.id = id;
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._telefone = telefone;
    }
    Object.defineProperty(Pessoa.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "sobrenome", {
        get: function () {
            return this._sobrenome;
        },
        set: function (value) {
            this._sobrenome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "telefone", {
        get: function () {
            return this._telefone;
        },
        set: function (value) {
            this._telefone = value;
        },
        enumerable: true,
        configurable: true
    });
    return Pessoa;
}());
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map