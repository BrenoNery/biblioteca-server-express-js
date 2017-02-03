"use strict";
var DAOAutor = (function () {
    function DAOAutor(autores) {
        this.autores = autores;
    }
    DAOAutor.prototype.incluir = function (autor) {
        this.autores.push(autor);
    };
    DAOAutor.prototype.alterar = function (target) {
        this.autores.map(function (v) {
            if (v.id === target.id) {
                v.nome = target.nome;
                v.sobrenome = target.sobrenome;
            }
        });
    };
    DAOAutor.prototype.consultarPorID = function (id) {
        return this.autores.find(function (item) { return item.id === id; });
    };
    DAOAutor.prototype.consultarTodas = function () {
        return this.autores;
    };
    DAOAutor.prototype.excluir = function () {
        this.autores.pop();
    };
    return DAOAutor;
}());
exports.DAOAutor = DAOAutor;
//# sourceMappingURL=dao.autor.js.map