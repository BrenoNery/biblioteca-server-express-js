"use strict";
var DAOPessoa = (function () {
    function DAOPessoa(pessoa) {
        this.pessoas = [];
        this.pessoas = pessoa;
    }
    DAOPessoa.prototype.incluir = function (novaPessoa) {
        this.pessoas.push(novaPessoa);
    };
    DAOPessoa.prototype.alterar = function (pessoa) {
        var res = this.pessoas.find(function (el) {
            return pessoa.nome === el.nome;
        });
        res.nome = pessoa.nome;
    };
    DAOPessoa.prototype.consultarPorID = function (id) {
        return this.pessoas.find(function (item) { return item.id === id; });
    };
    DAOPessoa.prototype.consultarTodas = function () {
        return this.pessoas;
    };
    DAOPessoa.prototype.excluir = function () {
        this.pessoas.pop();
    };
    return DAOPessoa;
}());
exports.DAOPessoa = DAOPessoa;
//# sourceMappingURL=dao.pessoa.js.map