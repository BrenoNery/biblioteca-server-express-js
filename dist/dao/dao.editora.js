"use strict";
var DAOEditora = (function () {
    function DAOEditora(editoras) {
        this.editoras = editoras;
    }
    DAOEditora.prototype.incluir = function (editora) {
        this.editoras.push(editora);
    };
    DAOEditora.prototype.alterar = function (editora) {
        var res = this.editoras.find(function (el) {
            return editora.nome === el.nome;
        });
        res.nome = editora.nome;
    };
    DAOEditora.prototype.consultarPorID = function (id) {
        return this.editoras.find(function (item) { return item.id === id; });
    };
    DAOEditora.prototype.consultarTodas = function () {
        return this.editoras;
    };
    DAOEditora.prototype.excluir = function () {
        this.editoras.pop();
    };
    return DAOEditora;
}());
exports.DAOEditora = DAOEditora;
//# sourceMappingURL=dao.editora.js.map